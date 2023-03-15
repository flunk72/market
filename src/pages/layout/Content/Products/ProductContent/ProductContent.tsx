import React from "react";
import { ProductContentWrapper } from "./ProductContent.styled";
import SingleCategory from "./SingleCategory/SingleCategory";

const ProductContent = () => {
  return (
    <ProductContentWrapper>
      <SingleCategory />
    </ProductContentWrapper>
  );
};

export default ProductContent;
