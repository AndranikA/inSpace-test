import { Controller, FieldError } from 'react-hook-form';

import { TextField } from '@/components/designSystem/input';

const usernameErrorMsg = 'Username is required';

const usernameValidationRules = {
  required: usernameErrorMsg,
};

type UsernameFieldType = {
  error?: FieldError | undefined;
  control: any;
};
export default function UsernameField({ control, error }: UsernameFieldType) {
  return (
    <Controller
      name='name'
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          type='text'
          label='Username'
          placeholder='Your username'
          errorMessage={error?.message}
          {...field}
        />
      )}
      rules={usernameValidationRules}
    />
  );
}
