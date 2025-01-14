import { useEffect, useState } from 'react';
import { fileSystemDB } from '../../db/fileSystemDB';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Text } from '@/components/ui/Text/Text';
import { Checkbox } from '@/components/ui/CheckBox/Checkbox';

interface FileTreeItem {
  name: string;
  kind: 'file' | 'directory';
  handle: FileSystemHandle;
  path: string;
  children?: FileTreeItem[];
  isExpanded?: boolean;
}

interface FileTreeProps {
  onFileSelect: (path: string, handle: FileSystemHandle) => void;
  onSelectionChange: (
    files: { path: string; handle: FileSystemHandle }[],
  ) => void;
}

export function FileTree({ onFileSelect, onSelectionChange }: FileTreeProps) {
  const [roots, setRoots] = useState<Array<FileTreeItem>>([]);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  const [selectedFiles, setSelectedFiles] = useState<Map<string, FileTreeItem>>(
    new Map(),
  );

  const handleOpenDirectory = async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();
      await fileSystemDB.storeWorkspaceRoot(dirHandle);
      loadWorkspaceRoots();
    } catch (error) {
      console.error('Error opening directory:', error);
    }
  };

  const loadWorkspaceRoots = async () => {
    const workspaces = await fileSystemDB.getWorkspaceRoots();
    const rootItems = await Promise.all(
      workspaces.map(async (ws) => ({
        name: ws.path.split('/').pop() || ws.path,
        kind: 'directory' as const,
        handle: ws.handle,
        path: ws.path,
        children: [],
        isExpanded: false,
      })),
    );
    setRoots(rootItems);
  };

  const scanDirectory = async (
    dirHandle: FileSystemDirectoryHandle,
    parentPath: string = '',
  ): Promise<FileTreeItem[]> => {
    const items: FileTreeItem[] = [];

    for await (const entry of dirHandle.values()) {
      const path = `${parentPath}/${entry.name}`;
      items.push({
        name: entry.name,
        kind: entry.kind,
        handle: entry,
        path,
        children: [],
        isExpanded: false,
      });
    }

    return items.sort((a, b) => {
      if (a.kind !== b.kind) {
        return a.kind === 'directory' ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
  };

  const toggleDirectory = async (item: FileTreeItem) => {
    const newExpandedPaths = new Set(expandedPaths);

    if (expandedPaths.has(item.path)) {
      newExpandedPaths.delete(item.path);
    } else {
      newExpandedPaths.add(item.path);
      if (item.kind === 'directory') {
        const children = await scanDirectory(
          item.handle as FileSystemDirectoryHandle,
          item.path,
        );
        item.children = children;
      }
    }

    setExpandedPaths(newExpandedPaths);
  };

  const toggleFileSelection = async (item: FileTreeItem) => {
    const newSelectedFiles = new Map(selectedFiles);

    // Helper function to recursively select/deselect files
    const toggleChildren = async (
      treeItem: FileTreeItem,
      shouldSelect: boolean,
    ) => {
      // Select/deselect the current item (both files and directories)
      if (shouldSelect) {
        newSelectedFiles.set(treeItem.path, treeItem);
      } else {
        newSelectedFiles.delete(treeItem.path);
      }

      // If it's a directory, process its children
      if (treeItem.kind === 'directory') {
        // If children haven't been loaded yet, load them
        if (!treeItem.children || treeItem.children.length === 0) {
          treeItem.children = await scanDirectory(
            treeItem.handle as FileSystemDirectoryHandle,
            treeItem.path,
          );
        }

        // Recursively process all children
        for (const child of treeItem.children) {
          await toggleChildren(child, shouldSelect);
        }
      }
    };

    // Determine if we're selecting or deselecting
    const shouldSelect = !selectedFiles.has(item.path);

    // Process the clicked item and all its children
    await toggleChildren(item, shouldSelect);

    setSelectedFiles(newSelectedFiles);
    onSelectionChange(
      Array.from(newSelectedFiles.values()).map((file) => ({
        path: file.path,
        handle: file.handle,
      })),
    );
  };
  const renderTreeItem = (item: FileTreeItem, depth: number = 0) => {
    const isExpanded = expandedPaths.has(item.path);
    const paddingLeft = depth * 12;
    const isSelected = selectedFiles.has(item.path);

    return (
      <div key={item.path}>
        <div className='flex items-center'>
          <Checkbox
            checked={isSelected}
            onChange={() => toggleFileSelection(item)}
            className='ml-2'
          />
          <Button
            size='sm'
            intent='ghost'
            onClick={() => {
              if (item.kind === 'directory') {
                toggleDirectory(item);
              } else {
                onFileSelect(item.path, item.handle);
              }
            }}
            className='w-full justify-start'
            style={{ paddingLeft: `${paddingLeft + 8}px` }}
          >
            <Text size='sm'>
              {item.kind === 'directory' ? (isExpanded ? '📂' : '📁') : '📄'}{' '}
              {item.name}
            </Text>
          </Button>
        </div>
        {isExpanded && item.children && (
          <div>
            {item.children.map((child) => renderTreeItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    loadWorkspaceRoots();
  }, []);

  return (
    <Card background='medium' size='sm' className='h-full w-64 overflow-auto'>
      <Button
        size='sm'
        intent='primary'
        onClick={handleOpenDirectory}
        className='mb-4 w-full'
      >
        Open Directory
      </Button>

      <div className='space-y-1'>
        {roots.map((root) => renderTreeItem(root))}
      </div>
    </Card>
  );
}
