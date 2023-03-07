import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(320px, 1200px) auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding: 15px;
  grid-template-areas:
    "header header header header"
    "content content content content"
    "footer footer footer footer";
  background: var(--main);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`;
