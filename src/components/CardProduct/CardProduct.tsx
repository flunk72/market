import { Card, DescriptionWrapper, Bedroom, ButtonWrapper, Button } from './CardProduct.styled';
import { CardProductProps } from './CardProduct.props';
import { FavoritIcon } from '../../helpers/icons';
import bedroom from '../../helpers/images/bedroom.jpg';
import { Pm, Ps } from '../Paragraph/Paragraph.styled';
import { useParams } from 'react-router-dom';

const CardProduct = ({ product }: CardProductProps) => {
  const { path } = useParams();

  const { price, name, description, id } = product;

  return (
    <Card>
      <FavoritIcon />
      <Bedroom src={bedroom} alt="" />
      <DescriptionWrapper>
        <Pm>{price}$</Pm>
        <Ps>{name}</Ps>
        <Ps>{description}</Ps>
      </DescriptionWrapper>
      {/* <Rating rating={rating} isEditable setRating={setRating} /> */}
      <ButtonWrapper>
        <Button to={`/products/${path}/${id}`}>More</Button>
        <Button to={`/products/${path}/${id}}`}>Add to basket</Button>
      </ButtonWrapper>
    </Card>
  );
};

export default CardProduct;
