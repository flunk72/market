import React from "react";
import { InputProps } from "./Input.props";
import { InputType } from "./Input.styled";

const Input = ({ type, placeholder }: InputProps) => {
  return <InputType type={type} placeholder={placeholder} />;
};

export default Input;
