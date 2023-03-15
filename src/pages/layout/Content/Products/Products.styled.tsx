import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar product";
  gap: 10px;
  height: 100%;
`;
