import React from "react";
import { Card } from "./CardProduct.styled";
import { CardProductProps } from "./CardProduct.props";

const CardProduct = ({ children }: CardProductProps) => {
  return <Card>{children}</Card>;
};

export default CardProduct;
