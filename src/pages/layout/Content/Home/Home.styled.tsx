import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr 20px 1fr;
  height: 100%;
  border-radius: 15px;
  gap: 15px;
`;

export const Trending = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  height: 100%;
`;

export const TrendingCard = styled.div`
  border-radius: 15px;
  padding: 10px;
  border: 1px solid var(--primary);
  background: var(--purple);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const Sale = styled(Trending)``;

export const SaleCard = styled(TrendingCard)``;
