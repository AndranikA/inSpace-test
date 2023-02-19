import { Controller } from 'react-hook-form';

import { Checkbox } from '@/components/designSystem/input';

type UserIsBannedFieldType = {
  control: any;
};
export default function UserIsBannedField({ control }: UserIsBannedFieldType) {
  return (
    <Controller
      name='isBanned'
      control={control}
      render={({ field }) => (
        <Checkbox defaultChecked={field.value} {...field}>
          Is Banned
        </Checkbox>
      )}
    />
  );
}
