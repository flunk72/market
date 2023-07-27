import { InputProps } from './Input.props';
import { InputType } from './Input.styled';

const Input = ({ type, placeholder, ref }: InputProps) => {
  return <InputType type={type} placeholder={placeholder} ref={ref} />;
};

export default Input;
