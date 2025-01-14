import { FC } from 'react';

import { Message } from '../../types';

interface MessageItemProps {
  message: Message;
}

export type MessageItemComponent = FC<MessageItemProps>;
