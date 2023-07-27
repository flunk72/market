import styled from 'styled-components';

export const CustomButton = styled.button`
  width: 100%;
  height: 30px;
  color: var(--black);
  background: var(--primary);
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: var(--primary-hover);
  }
`;
