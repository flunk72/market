import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  width: 400px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  padding: 10px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TabButton = styled(NavLink)`
  margin-right: 20px;

  &.active {
    color: var(--primary);
  }

  &:last-child {
    margin-right: 0;
  }
`;
