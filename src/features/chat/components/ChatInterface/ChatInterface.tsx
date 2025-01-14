import { useState } from 'react';
import { useChatActions } from '../../hooks/useChatActions';
import { useChatState } from '../../hooks/useChatState';
import { ChatInput } from '../ChatInput/ChatInput';
import { Header } from '../Header/Header';
import { MessageList } from '../MessageList/MessageList';

import { Editor } from './Editor';
import { ChatInterfaceComponent } from './types';

export const ChatInterface: ChatInterfaceComponent = () => {
  const { messages, isLoading } = useChatState();
  const { sendMessage } = useChatActions();
  const [selectedFiles, setSelectedFiles] = useState<
    Array<{ path: string; handle: FileSystemHandle }>
  >([]);

  return (
    <div className='grid h-screen w-full grid-cols-[1fr,1fr] grid-rows-[auto,1fr] overflow-y-auto'>
      <Header />
      <div className='relative flex w-full flex-1'>
        <div className='mx-auto flex h-full w-full max-w-3xl flex-col'>
          <div className='flex-1 px-4'>
            <div className='mx-auto w-full'>
              <MessageList messages={messages} />
            </div>
          </div>
          <div className='sticky bottom-0 p-4'>
            <ChatInput
              onSendMessage={sendMessage}
              isLoading={isLoading}
              selectedFiles={selectedFiles}
            />
          </div>
        </div>
      </div>
      <Editor onFileSelectionChange={setSelectedFiles} />
    </div>
  );
};
