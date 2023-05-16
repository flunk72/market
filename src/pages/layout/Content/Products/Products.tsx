import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import ProductContent from './ProductContent/ProductContent';
import { ProductsWrapper } from './Products.styled';

const Products = () => {
  return (
    <ProductsWrapper>
      <Sidebar />
      <ProductContent />
    </ProductsWrapper>
  );
};

export default Products;
