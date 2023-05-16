import React, { useState } from 'react';
import { HomeWrapper, Trending, Sale } from './Home.styled';
import { trending, sale } from '../../../../helpers/array/array';
import { H3 } from '../../../../components/HTag/HTag.styled';
import CardProduct from '../../../../components/CardProduct/CardProduct';

const Home = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <HomeWrapper>
      <H3 place>Trending</H3>
      <Trending>
        {trending.map((trend) => {
          return <CardProduct product={trend} />;
        })}
      </Trending>
      <H3 place>Sale</H3>
      <Sale>
        {sale.map((s) => {
          return <CardProduct product={s} />;
        })}
      </Sale>
    </HomeWrapper>
  );
};

export default Home;
