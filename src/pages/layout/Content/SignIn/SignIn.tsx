import React from "react";
import Input from "../../../../components/Input/Input";
import { SignInWrapper, Form } from "./SignIn.styled";

const SignIn = () => {
  return (
    <SignInWrapper>
      <Form>
        <Input type="text" placeholder="Enter your name" />
        <Input type="password" placeholder="Enter your password" />
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
