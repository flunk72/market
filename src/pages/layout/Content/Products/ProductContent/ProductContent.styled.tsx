import styled from 'styled-components';

export const ProductContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-area: product;
  justify-items: center;
  gap: 15px;
`;
