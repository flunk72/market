import React from "react";
import {
  HomeWrapper,
  Trending,
  TrendingCard,
  Sale,
  SaleCard,
} from "./Home.styled";
import { trending, sale } from "../../../../helpers/array/array";
import { H3 } from "../../../../components/HTag/HTag.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <H3 place>Trending</H3>
      <Trending>
        {trending.map((t) => {
          return <TrendingCard>{t.name}</TrendingCard>;
        })}
      </Trending>
      <H3 place>Sale</H3>
      <Sale>
        {sale.map((t) => {
          return <SaleCard>{t.name}</SaleCard>;
        })}
      </Sale>
    </HomeWrapper>
  );
};

export default Home;
