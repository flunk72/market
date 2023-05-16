import styled from 'styled-components';

export const ProductContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-area: product;
  justify-items: center;
  gap: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
  border-radius: 10px;
`;
