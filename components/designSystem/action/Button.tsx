import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';

export type ButtonProps = {
  /**
   * The HTML id of the button element.
   */
  id?: string;
  /**
   * The HTML type of button element.
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The action to perform when the button is clicked.
   */
  onClick?: ComponentProps<'button'>['onClick'];
  /**
   * The tab index of the button element.
   */
  tabIndex?: number;
  /**
   * Mute the button and prevent any interaction.
   */
  disabled?: boolean;
  /**
   * Show a loader to provide feedback.
   */
  working?: boolean;
  /**
   * The classname of the button.
   */
  className?: string;
  /**
   * The label of the button.
   */
  children?: ReactNode;
  /**
   * The label of the button.
   */
  variant?: 'primary' | 'caution';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { disabled = false, working = false, children, id, type = 'button', onClick, tabIndex, className, variant = 'primary' },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${
          variant === 'primary' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-red-600 hover:bg-red-800'
        } text-white font-bold py-2 px-4 rounded ${className}`}
        id={id}
        type={type}
        onClick={onClick}
        tabIndex={tabIndex}
        disabled={disabled || working}
      >
        {working && '...'}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
