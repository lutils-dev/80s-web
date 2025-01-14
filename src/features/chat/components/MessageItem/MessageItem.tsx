import { MessageItemComponent } from './types';
import { messageItemVariants } from './variants';

import { Card } from '@/components/ui/Card/Card';
import { Text } from '@/components/ui/Text/Text';

export const MessageItem: MessageItemComponent = ({ message }) => {
  const { role } = message;

  return (
    <div className='flex'>
      <Card
        className={messageItemVariants({ role })}
        background={role === 'user' ? 'medium' : 'white'}
        rounded='md'
        size='sm'
      >
        <Text>{message.content}</Text>
      </Card>
    </div>
  );
};
