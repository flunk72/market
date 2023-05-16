import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-right: auto;
`;

export const Back = styled(Link)`
  margin: 5px 15px 0 0;

  svg {
    fill: var(--primary);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 40%;
  margin-right: 20px;
  border-radius: 10px;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 8px 0;
`;

export const CharacteristicDesc = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 8px 0;
`;

export const Name = styled.dt`
  position: relative;
  width: 70%;

  span {
    position: relative;
    background: var(--white);
    color: #707f8d;
    padding-right: 5px;
  }

  &::before {
    border-bottom: 2px dotted rgba(204, 214, 228, 0.6);
    bottom: 0.7em;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const NameDesc = styled.dd`
  font-size: 14px;
  padding-left: 5px;
`;
