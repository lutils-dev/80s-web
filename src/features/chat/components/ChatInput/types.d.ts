import { FC } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  selectedFiles?: Array<{ path: string; handle: FileSystemHandle }>;
}

export type ChatInputComponent = FC<ChatInputProps>;
