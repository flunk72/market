import { useParams } from 'react-router-dom';
import { chairs } from '../../helpers/array/array';
import {
  Wrapper,
  TitleWrapper,
  Back,
  ProductWrapper,
  ProductImage,
  ProductDescription,
  Characteristics,
  CharacteristicDesc,
  Name,
  NameDesc,
  Description,
} from './Product.styled';
import { Ps } from '../Paragraph/Paragraph.styled';
import { BackIcon } from '../../helpers/icons';
import bedroom from '../../helpers/images/bedroom.jpg';
import HTag from '../HTag/HTag';

const Product = () => {
  const { id, path } = useParams();

  const product: any = chairs.find((p) => p.id === Number(id));
  const { name } = product;

  return (
    <Wrapper>
      <TitleWrapper>
        <Back to={`${path}`}>
          <BackIcon />
        </Back>
        <HTag tag="h3">{name}</HTag>
      </TitleWrapper>
      <ProductWrapper>
        <ProductImage src={bedroom} alt="" />
        <ProductDescription>
          <Description>
            <HTag tag="h4">Описание</HTag>
            <Ps>
              Органайзер для хранения вещей, поможет навести порядок в шкафу. В нем есть девять
              ячеек, в которых можно разместить различные предметы гардероба. Также, органайзер
              хорошо подойдет для хранения полотец. С одной стороны, органайзер оснащен ручкой, что
              позволяет легко достать его с полки в шкафу. Выполнен из экологичного, прочного
              материала с влагоотталкивающей пропиткой. Не оснащен жестким каркасом, хорошо держит
              форму при наличии вещей в ячейках.
            </Ps>
          </Description>
          <Characteristics>
            <HTag tag="h4">Характеристики</HTag>
            <CharacteristicDesc>
              <Name>
                <span>Тип</span>
              </Name>
              <NameDesc>Диван из замши</NameDesc>
            </CharacteristicDesc>
          </Characteristics>
        </ProductDescription>
      </ProductWrapper>
      <HTag tag="h4">Отзывы</HTag>
    </Wrapper>
  );
};

export default Product;
