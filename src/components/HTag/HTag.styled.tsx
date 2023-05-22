import styled from 'styled-components';

export const H1 = styled.h1<{ place?: boolean }>`
  grid-area: h1;
  margin: auto;
  padding: 10px 0;
`;

export const H2 = styled.h2<{ place?: boolean }>`
  grid-area: h2;
  text-align: ${(props) => (props.place ? 'center' : 'left')};
  width: ${(props) => (props.place ? '70%' : '100%')};
  margin: auto;
  padding: 10px 0;
`;

export const H3 = styled.h3<{ place?: boolean }>`
  grid-area: h3;
  margin: ${(props) => (props.place ? '0 auto' : 'auto')};
  padding: 10px 0;
`;

export const H4 = styled.h4<{ place?: boolean }>`
  grid-area: h4;
  text-align: ${(props) => (props.place ? 'center' : 'left')};
`;
