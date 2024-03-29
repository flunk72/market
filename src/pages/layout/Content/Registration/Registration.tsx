import BaseForm from '../../../../components/BaseForm/BaseForm';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import HTag from '../../../../components/HTag/HTag';
import { useState } from 'react';
import { StateForm } from '../../../../types/formTypes';

const Registration = () => {
  const [stateForm, setStateForm] = useState<Partial<StateForm>>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <BaseForm onSubmit={() => console.log()}>
      <HTag tag="h3">Sign Up</HTag>
      {/* <Input
        type="text"
        placeholder="Enter your name"

        //  onChange={() => handleChange}
      />
      <Input
        type="text"
        placeholder="Enter your email"

        // onChange={() => handleChange}
      />
      <Input
        type="password"
        placeholder="Enter your password"

        // onChange={() => handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm password"

        // onChange={() => handleChange}
      /> */}
      <Button htmlType="submit">Sign Up</Button>
    </BaseForm>
  );
};

export default Registration;
