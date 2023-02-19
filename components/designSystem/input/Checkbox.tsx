import type { ChangeEventHandler, ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';

type CheckboxProps = {
  /**
   * ID for the checkbox input.
   */
  id?: string;
  /**
   * Name for the checkbox input.
   */
  name: string;
  /**
   * Value for the checkbox input.
   */
  value?: string;
  /**
   * Sets the state of the checkbox. `indeterminate` shows a horizontal line in
   * the checkbox. Use onChange to update its value.
   */
  checked?: boolean;
  /**
   * Sets the state of the checkbox. `indeterminate` shows a horizontal line in
   * the checkbox. Use onChange to update its value.
   */
  defaultChecked?: boolean;
  /**
   * Indicates that the checkbox is invalid unless checked.
   */
  required?: boolean;
  /**
   * Prevents the user from interacting with the checkbox.
   */
  disabled?: boolean;
  /**
   * Called when the checkbox's value is changed by the user.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Action to perform when the field is blurred.
   */
  onBlur?: ComponentProps<'input'>['onBlur'];
  /**
   * The content of the checkbox.
   */
  children: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, value, checked, defaultChecked, required = false, disabled = false, onChange, onBlur, children }, ref) => {
    return (
      <label>
        <input
          ref={ref}
          id={id ? id : name}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          type='checkbox'
          className='mr-2'
          defaultChecked={defaultChecked}
        />
        {children}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
