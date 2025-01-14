const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockChatAPI = {
  sendMessage: async (
    message: string,
  ): Promise<AsyncGenerator<string, void, unknown>> => {
    console.log(message);

    await delay(500);
    const words =
      'This is a mock response. It will be streamed word by word.'.split(' ');

    async function* streamResponse() {
      for (const word of words) {
        await delay(100);
        yield word + ' ';
      }
    }

    return streamResponse();
  },
};
