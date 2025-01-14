import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { editorDB } from '../../db/editorDB';
import { Card } from '@/components/ui/Card/Card';
import { useThemeStore } from '@/features/theme/hooks/useThemeStore';

interface MonacoEditorProps {
  path?: string;
  content?: string;
  onChange?: (content: string) => void;
}

export function MonacoEditor({ path, content, onChange }: MonacoEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<monaco.editor.IStandaloneCodeEditor>();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (editorRef.current) {
      editor.current = monaco.editor.create(editorRef.current, {
        value: content,
        language: 'typescript',
        theme: theme === 'light' ? 'vs' : 'vs-dark',
        minimap: { enabled: false },
        automaticLayout: true,
        fontSize: 13,
        lineHeight: 20,
        padding: { top: 8, bottom: 8 },
        scrollbar: {
          vertical: 'visible',
          horizontal: 'visible',
          verticalScrollbarSize: 12,
          horizontalScrollbarSize: 12,
        },
      });

      editor.current.onDidChangeModelContent(() => {
        const newContent = editor.current?.getValue();
        if (newContent && path) {
          editorDB.saveEditorState(path, newContent);
          onChange?.(newContent);
        }
      });

      return () => editor.current?.dispose();
    }
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (editor.current) {
      monaco.editor.setTheme(theme === 'light' ? 'vs' : 'vs-dark');
    }
  }, [theme]);

  useEffect(() => {
    if (editor.current && content !== undefined) {
      const currentContent = editor.current.getValue();
      if (currentContent !== content) {
        editor.current.setValue(content);
      }
    }
  }, [content]);

  return (
    <Card
      background={theme === 'light' ? 'light' : 'dark'}
      className='h-full w-full'
    >
      <div ref={editorRef} className='h-full w-full' />
    </Card>
  );
}
