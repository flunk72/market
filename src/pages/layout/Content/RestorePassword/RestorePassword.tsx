import React from 'react';
import BaseForm from '../../../../components/BaseForm/BaseForm';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import HTag from '../../../../components/HTag/HTag';

const RestorePassword = () => {
  return (
    <BaseForm>
      <HTag tag="h3">Restore password</HTag>
      <Input type="password" name="oldPassword" placeholder="Enter old password" />
      <Input type="password" name="newPassword" placeholder="Enter new password" />
      <Input type="password" name="confirmPassword" placeholder="Confirm new password" />
      <Button htmlType="submit">Restore password</Button>
    </BaseForm>
  );
};

export default RestorePassword;
