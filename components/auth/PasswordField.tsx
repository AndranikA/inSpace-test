import { Controller, FieldError } from 'react-hook-form';

import { TextField } from '@/components/designSystem/input';

const requiredPasswordErrorMsg = 'Password is required';

const passwordValidationRules = {
  required: requiredPasswordErrorMsg,
};

type PasswordFieldType = {
  error: FieldError | undefined;
  control: any;
};
export default function PasswordField({ control, error }: PasswordFieldType) {
  return (
    <Controller
      name='password'
      control={control}
      defaultValue=''
      render={({ field }) => (
        <TextField
          type='password'
          label='Password'
          placeholder='Your password'
          errorMessage={error?.message}
          {...field}
        />
      )}
      rules={passwordValidationRules}
    />
  );
}
