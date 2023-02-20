import { useCallback } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Text } from '@/components/designSystem/informational';
import { IconClose } from '@/components/designSystem/informational/Icons';

type ModalDialogAction = {
  /**
   * Label for the action.
   */
  label: string;
  /**
   * Action to perform when tapped.
   */
  onClick: () => void;
  /**
   * Dismisses on tap.
   */
  dismiss?: boolean;
  /**
   * Disabled the action.
   */
  disabled?: boolean;
  /**
   * Show a loader to provide feedback.
   */
  working?: boolean;
  /**
   * Show a loader to provide feedback.
   */
  variant?: 'primary' | 'caution';
};

type ModalDialogProps = {
  /**
   * Used to show the dialog. Use with onChange.
   */
  open?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onChange?: (open: boolean) => void;
  /**
   * The action to perform when dialog is closed.
   */
  onClose?: () => void;
  /**
   * An optional trigger that opens the dialog.
   */
  trigger?: React.ReactNode;
  /**
   * The title of the dialog.
   */
  title: string;
  /**
   * The body content of the dialog.
   */
  children?: React.ReactNode;
};

export function ModalDialog({
  open,
  onChange,
  onClose,
  trigger,
  title,
  children,
}: ModalDialogProps) {
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (onChange) onChange(open);
      if (onClose && !open) onClose();
    },
    [onChange, onClose]
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      {trigger ? <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger> : null}

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className='fixed bg-slate-800/75 z-40 inset-0' />
        <DialogPrimitive.Content className='fixed z-50 left-1/2 top-1/2 isolate flex-col bg-white overflow-x-hidden w-96 -translate-y-1/2 -translate-x-1/2 rounded-lg'>
          <header className='border-b-2 border-gray p-4'>
            <DialogPrimitive.Close asChild>
              <IconClose className='ml-auto cursor-pointer' />
            </DialogPrimitive.Close>
          </header>

          <main className='p-3'>
            <DialogPrimitive.Title asChild>
              <Text as='h2' className='text-gray text-lg font-bold mb-2 text-center'>
                {title}
              </Text>
            </DialogPrimitive.Title>
            {children}
          </main>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
