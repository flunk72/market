import React from "react";
import { CustomButton } from "./Button.styled";
import { ButtonProps } from "./Button.props";

const Button = ({ children }: ButtonProps) => {
  return <CustomButton>{children}</CustomButton>;
};

export default Button;
