import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
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

export const Bedroom = styled.img`
  width: 100%;
  margin-top: 10px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Button = styled(Link)`
  width: 45%;
  height: 30px;
  text-align: center;
  color: var(--black);
  background: var(--primary);
  border-radius: 5px;
  font-size: 14px;
  line-height: 28px;

  &:hover {
    cursor: pointer;
    background: var(--primary-hover);
  }
`;
