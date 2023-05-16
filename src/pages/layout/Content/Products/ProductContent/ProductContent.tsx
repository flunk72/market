import React from 'react';
import { ProductContentWrapper } from './ProductContent.styled';
import SingleCategory from './SingleCategory/SingleCategory';
import { useParams } from 'react-router-dom';
import Product from '../../../../../components/Product/Product';

const ProductContent = () => {
  const { id } = useParams();
  return <ProductContentWrapper>{id ? <Product /> : <SingleCategory />}</ProductContentWrapper>;
};

export default ProductContent;
