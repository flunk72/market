import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Trending = styled.div`
  display: grid;
  justify-items: center;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  gap: 15px;
`;

export const Sale = styled(Trending)``;
