import type { ComponentProps, ChangeEventHandler } from 'react';
import { forwardRef } from 'react';

import { Text } from '../informational';

export type TextFieldProps = {
  /**
   * ID of the field.
   */
  id?: string;
  /**
   * Name for the field.
   */
  name: string;
  /**
   * Adds a label to the field.
   */
  label?: string;
  /**
   * Displays an error message under the field.
   */
  errorMessage?: string;
  /**
   * The underlying type of the field.
   */
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  /**
   * Placeholder of the text field.
   */
  placeholder?: string;
  /**
   * Value of the text field.
   */
  value?: string;
  /**
   * Called when the field's value is changed by the user.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /**
   * Disables the field.
   */
  disabled?: boolean;
  /**
   * Maximum character length for an field.
   */
  maxLength?: number;
  /**
   * Indicates the field is required.
   */
  required?: boolean;
  /**
   * Action to perform when a key is pressed.
   */
  onKeyDown?: ComponentProps<'input'>['onKeyDown'];
  /**
   * Action to perform when the field is blurred.
   */
  onBlur?: ComponentProps<'input'>['onBlur'];
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      name,
      label,
      type,
      placeholder,
      value,
      onChange,
      onBlur,
      errorMessage,
      disabled = false,
      maxLength,
      required = false,
      onKeyDown,
    },
    ref
  ) => {
    return (
      <div className='mb-4'>
        <label htmlFor={id ? id : name} className='block text-black text-md font-bold mb-2'>{label}</label>
        <input
          ref={ref}
          id={id ? id : name}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
        {errorMessage && <Text className='text-sm text-red-500'>{errorMessage}</Text>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
