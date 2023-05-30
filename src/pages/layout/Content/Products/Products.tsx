import React from 'react';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import ProductContent from './ProductContent/ProductContent';
import { ProductsWrapper } from './Products.styled';
import Navigation from '../../../../components/Navigation/Navigation';
import { sidebarMenu } from '../../../../helpers/array/sidebarMenu';

const Products = () => {
  return (
    <ProductsWrapper>
      <Sidebar>
        <Navigation navigation={sidebarMenu} sidebar="true" />
      </Sidebar>
      <ProductContent />
    </ProductsWrapper>
  );
};

export default Products;
