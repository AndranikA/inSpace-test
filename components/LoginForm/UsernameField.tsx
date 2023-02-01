import { Controller, FieldError } from 'react-hook-form';

import { TextField } from '@/components/input';

const usernameErrorMsg = 'Username is required';

const usernameValidationRules = {
  required: usernameErrorMsg,
};

type UsernameFieldType = {
  error: FieldError | undefined;
  control: any;
};
export default function UsernameField({ control, error }: UsernameFieldType) {
  console.log(error, 'error')
  return (
    <Controller
      name='username'
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
