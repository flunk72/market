import { CustomButton } from './Button.styled';
import { ButtonProps } from './Button.props';

const Button = ({ children, htmlType }: ButtonProps) => {
  return <CustomButton type={htmlType}>{children}</CustomButton>;
};

export default Button;
