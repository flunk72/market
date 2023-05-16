import Input from '../../../../components/Input/Input';
import { ForgotButton } from './SignIn.styled';
import HTag from '../../../../components/HTag/HTag';
import Button from '../../../../components/Button/Button';
import BaseForm from '../../../../components/BaseForm/BaseForm';

const SignIn = () => {
  return (
    <BaseForm>
      <HTag tag="h3">Sign In</HTag>
      <Input type="text" placeholder="Enter your name" name="name" />
      <Input type="password" placeholder="Enter your password" name="password" />
      <ForgotButton to="/restore-password">Forgot password?</ForgotButton>
      <Button htmlType="submit">Sign In</Button>
    </BaseForm>
  );
};

export default SignIn;
