import { useParams } from 'react-router-dom';
import Chairs from './Chairs';
import Tables from './Tables';
import Pedestales from './Pedestales';
import Armchairs from './Armchairs';
import Sofas from './Sofas';
import Cupboards from './Cupboards';

const SingleCategory = () => {
  const { path } = useParams();

  switch (path) {
    case 'chairs':
      return <Chairs />;
    case 'tables':
      return <Tables />;
    case 'pedestales':
      return <Pedestales />;
    case 'armchairs':
      return <Armchairs />;
    case 'sofas':
      return <Sofas />;
    case 'cupboards':
      return <Cupboards />;
    default:
      return null;
  }
};

export default SingleCategory;
