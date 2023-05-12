import React, { useState } from 'react';
import {
  HomeWrapper,
  Trending,
  Sale,
  Bedroom,
  ButtonWrapper,
  DescriptionWrapper,
} from './Home.styled';
import { trending, sale } from '../../../../helpers/array/array';
import { H3 } from '../../../../components/HTag/HTag.styled';
import CardProduct from '../../../../components/CardProduct/CardProduct';
import Button from '../../../../components/Button/Button';
import { FavoritIcon } from '../../../../helpers/icons';
import bedroom from '../../../../helpers/images/bedroom.jpg';
import { Ps, Pm } from '../../../../components/Paragraph/Paragraph.styled';
import Rating from '../../../../components/Rating/Rating';

const Home = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <HomeWrapper>
      <H3 place>Trending</H3>
      <Trending>
        {trending.map((t) => {
          return (
            <CardProduct>
              <FavoritIcon />
              <Bedroom src={bedroom} alt="" />
              <DescriptionWrapper>
                <Pm>{t.price}$</Pm>
                <Ps>{t.name}</Ps>
                <Ps>{t.description}</Ps>
              </DescriptionWrapper>
              <Rating rating={rating} isEditable setRating={setRating} />
              <ButtonWrapper>
                <Button>More</Button>
                <Button>Add to cart</Button>
              </ButtonWrapper>
            </CardProduct>
          );
        })}
      </Trending>
      <H3 place>Sale</H3>
      <Sale>
        {sale.map((t) => {
          return <CardProduct>{t.name}</CardProduct>;
        })}
      </Sale>
    </HomeWrapper>
  );
};

export default Home;
