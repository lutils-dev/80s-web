import { FC } from 'react';

import { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
}

export type MessageListComponent = FC<MessageListProps>;
