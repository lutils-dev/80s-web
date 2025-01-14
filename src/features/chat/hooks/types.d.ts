import { ChatState, Message } from '../types';

export interface ChatStoreMethods {
  addMessage: (message: Message) => void;
  updateMessage: (id: string, content: string) => void;
  setLoading: (isLoading: boolean) => void;
}

export type UseChatStore = ChatState & ChatStoreMethods;
