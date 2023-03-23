import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  svg {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      fill: red;
    }
  }

  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
`;
