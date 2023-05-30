import BaseForm from '../../../../components/BaseForm/BaseForm';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import HTag from '../../../../components/HTag/HTag';

const Registration = () => {
  return (
    <BaseForm>
      <HTag tag="h3">Sign Up</HTag>
      <Input type="text" placeholder="Enter your name" name="name" />
      <Input type="text" placeholder="Enter your email" name="email" />
      <Input type="password" placeholder="Enter your password" name="password" />
      <Input type="password" placeholder="Confirm password" name="confirm-password" />
      <Button htmlType="submit">Sign Up</Button>
    </BaseForm>
  );
};

export default Registration;
