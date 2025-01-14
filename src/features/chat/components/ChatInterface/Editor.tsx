import { useCallback, useState } from 'react';

import { MonacoEditor } from '@/features/editor/components/MonacoEditor/MonacoEditor';
import { FileTree } from '@/features/fileSystem/components/FileTree/FileTree';

export const Editor = ({ onFileSelectionChange }) => {
  const [currentFile, setCurrentFile] = useState<{
    path: string;
    content: string;
  } | null>(null);

  const handleFileSelect = useCallback(
    async (path: string, handle: FileSystemHandle) => {
      if (handle.kind === 'file') {
        const fileHandle = handle as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const content = await file.text();
        setCurrentFile({ path, content });
      }
    },
    [],
  );

  return (
    <div className='flex h-full overflow-hidden'>
      <FileTree
        onFileSelect={handleFileSelect}
        onSelectionChange={onFileSelectionChange}
      />
      <div className='flex-1'>
        {currentFile ? (
          <MonacoEditor path={currentFile.path} content={currentFile.content} />
        ) : (
          <div className='flex h-full items-center justify-center text-gray-400'>
            Select a file to edit
          </div>
        )}
      </div>
    </div>
  );
};
