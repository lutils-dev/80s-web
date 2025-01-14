import { v4 as uuidv4 } from 'uuid';

import { mockChatAPI } from '../api';

import { useChatState } from './useChatState';

export const useChatActions = () => {
  const { addMessage, updateMessage, setLoading } = useChatState();

  const sendMessage = async (content: string) => {
    const userMessageId = uuidv4();
    addMessage({
      id: userMessageId,
      content,
      role: 'user',
      timestamp: Date.now(),
    });

    setLoading(true);

    const assistantMessageId = uuidv4();
    addMessage({
      id: assistantMessageId,
      content: '',
      role: 'assistant',
      timestamp: Date.now(),
    });

    const responseStream = await mockChatAPI.sendMessage(content);
    let responseContent = '';

    for await (const chunk of responseStream) {
      responseContent += chunk;
      updateMessage(assistantMessageId, responseContent);
    }

    setLoading(false);
  };

  return { sendMessage };
};
