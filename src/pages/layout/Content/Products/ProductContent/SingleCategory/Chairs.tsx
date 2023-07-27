import { chairs } from '../../../../../../helpers/array/array';
import CardProduct from '../../../../../../components/CardProduct/CardProduct';

const Chairs = () => {
  return (
    <>
      {chairs.map((chair) => {
        return <CardProduct key={chair.id} product={chair} />;
      })}
    </>
  );
};

export default Chairs;
