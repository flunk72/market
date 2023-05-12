import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Trending = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 1fr;
  gap: 15px;
`;

export const Sale = styled(Trending)``;

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
