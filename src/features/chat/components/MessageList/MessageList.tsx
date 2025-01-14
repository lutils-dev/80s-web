import { MessageItem } from '../MessageItem/MessageItem';

import { MessageListComponent } from './types';

export const MessageList: MessageListComponent = ({ messages }) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-1'>
        <div className='mb-auto w-full space-y-4 p-4'>
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};
