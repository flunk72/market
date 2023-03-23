import styled from "styled-components";

export const CustomButton = styled.button`
  width: 45%;
  height: 30px;
  color: var(--black);
  background: var(--primary);
  border: none;

  &:hover {
    cursor: pointer;
    background: var(--primary-hover);
  }
`;
