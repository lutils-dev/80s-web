// src/features/chat/components/ChatInput/ChatInput.tsx
import { useForm, Controller } from 'react-hook-form';
import { FiMenu, FiPaperclip, FiSend } from 'react-icons/fi';

import { ChatInputComponent } from './types';

import { Button } from '@/components/ui/Button/Button';
import { Textarea } from '@/components/ui/Textarea/Textarea';

export const ChatInput: ChatInputComponent = ({
  onSendMessage,
  isLoading,
  selectedFiles = [],
}) => {
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      message: '',
    },
  });

  const message = watch('message');

  const onSubmit = async (data: { message: string }) => {
    if (data.message.trim() && !isLoading) {
      const filesContent = await Promise.all(
        selectedFiles.map(async (file) => {
          const fileHandle = file.handle as FileSystemFileHandle;
          const fileContent = await fileHandle.getFile();
          const content = await fileContent.text();
          return {
            name: file.path,
            content,
          };
        }),
      );

      onSendMessage(data.message, { files: filesContent });
      reset();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      {selectedFiles.length > 0 && (
        <div className='mb-2 flex flex-wrap gap-2'>
          {selectedFiles.map((file) => (
            <div
              key={file.path}
              className='rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800'
            >
              📎 {file.path.split('/').pop()}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className='flex w-full gap-2'>
        <Controller
          name='message'
          control={control}
          render={({ field }) => (
            <Textarea
              containerProps={{
                background: 'medium',
                rounded: 'lg',
                className: 'flex-1 relative z-0',
                size: 'sm',
              }}
              placeholder='Ask anything...'
              maxRows={5}
              autoResize
              onKeyDown={handleKeyPress}
              {...field}
            >
              <div className='flex items-center gap-2 px-3 py-1'>
                <Button
                  type='button'
                  intent='ghost'
                  icon={FiMenu}
                  tooltip='Focus'
                  tooltipPlacement='top'
                />
                <Button
                  type='button'
                  intent='ghost'
                  icon={FiPaperclip}
                  tooltip='Attach'
                  tooltipPlacement='top'
                />
                <div className='flex-1' />
                <div className='flex items-center gap-2'>
                  <Button
                    type='submit'
                    icon={FiSend}
                    disabled={!message.trim() || isLoading}
                  />
                </div>
              </div>
            </Textarea>
          )}
        />
      </form>
    </>
  );
};
