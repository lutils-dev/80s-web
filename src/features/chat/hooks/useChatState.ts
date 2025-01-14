import { create } from 'zustand';

import { Message } from '../types';

import { UseChatStore } from './types';

export const useChatState = create<UseChatStore>((set) => ({
  messages: [],
  isLoading: false,
  addMessage: (message: Message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  updateMessage: (id: string, content: string) =>
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, content } : msg,
      ),
    })),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
