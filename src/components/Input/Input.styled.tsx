import styled from 'styled-components';

export const InputType = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--primary);
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
