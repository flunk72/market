import React, { useState } from 'react';
import BaseForm from '../../../../components/BaseForm/BaseForm';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import HTag from '../../../../components/HTag/HTag';
import { StateForm } from '../../../../types/formTypes';

const RestorePassword = () => {
  const [stateForm, setStateForm] = useState<Partial<StateForm>>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  return (
    <BaseForm onSubmit={() => console.log()}>
      <HTag tag="h3">Restore password</HTag>
      {/* <Input
        type="password"
        placeholder="Enter old password"
        // onChange={() => handleChange}
      />
      <Input
        type="password"
        placeholder="Enter new password"
        // onChange={() => handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm new password"
        // onChange={() => handleChange}
      /> */}
      <Button htmlType="submit">Restore password</Button>
    </BaseForm>
  );
};

export default RestorePassword;
