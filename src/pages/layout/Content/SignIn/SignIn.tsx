import Input from '../../../../components/Input/Input';
import { ForgotButton } from './SignIn.styled';
import HTag from '../../../../components/HTag/HTag';
import Button from '../../../../components/Button/Button';
import BaseForm from '../../../../components/BaseForm/BaseForm';
import { StateForm } from '../../../../types/formTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRef } from 'react';

const SignIn = () => {
  const ref = useRef();
  const { register, handleSubmit } = useForm<Partial<StateForm>>();
  console.log(ref);

  const submit: SubmitHandler<Partial<StateForm>> = (data) => {
    console.log(data);
  };
  return (
    <BaseForm onSubmit={handleSubmit(submit)}>
      <HTag tag="h3">Sign In</HTag>
      <Input
        type="text"
        placeholder="Enter your name"
        ref={(e: any) => {
          ref.current = e;
          register(e);
        }}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        ref={(e: any) => {
          ref.current = e;
          register(e);
        }}
      />
      <ForgotButton to="/restore-password">Forgot password?</ForgotButton>
      <Button htmlType="submit">Sign In</Button>
    </BaseForm>
  );
};

export default SignIn;
