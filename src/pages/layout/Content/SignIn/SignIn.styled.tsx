import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotButton = styled(Link)`
  display: block;
  margin-bottom: 15px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
`;
