import { useLocation } from 'react-router-dom';
import HTag from '../HTag/HTag';
import { BaseFormProps } from './BaseForm.props';
import { Form, Tab, TabButton, WrapperForm } from './BaseForm.styled';

const BaseForm = ({ children }: BaseFormProps) => {
  const location = useLocation();
  const isVisibleTab = location.pathname;
  return (
    <WrapperForm>
      <Tab>
        <TabButton to="/sign-in">
          <HTag tag="h3">Sign In</HTag>
        </TabButton>
        <TabButton to="/registration">
          <HTag tag="h3">Sign Up</HTag>
        </TabButton>
      </Tab>
      <Form>{children}</Form>
    </WrapperForm>
  );
};

export default BaseForm;
