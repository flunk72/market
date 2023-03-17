import styled from "styled-components";

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
  grid-area: trending;
  gap: 15px;
`;

export const TrendingCard = styled.div`
  padding: 10px;
  border: 1px solid var(--primary);
  background: var(--purple);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const Sale = styled(Trending)`
  grid-area: sale;
`;

export const SaleCard = styled(TrendingCard)``;
