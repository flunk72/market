import { ContentWrapper } from './Content.styled';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import About from './About/About';
import Support from './Support/Support';
import SingleCategory from './Products/ProductContent/SingleCategory/SingleCategory';
import Order from './Order/Order';
import Settings from './Settings/Settings';
import Basket from './Basket/Basket';
import Favorit from './Favorit/Favorit';
import SignIn from './SignIn/SignIn';
import Registration from './Registration/Registration';
import Product from '../../../components/Product/Product';
import RestorePassword from './RestorePassword/RestorePassword';

const Content = () => {
  const location = useLocation();

  return (
    <ContentWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            location.pathname === '/products' ? (
              <Navigate to="/products/chairs" replace />
            ) : (
              <Products />
            )
          }>
          <Route path=":path" element={<SingleCategory />}>
            <Route path=":id" element={<Product />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/support" element={<Support />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/restore-password" element={<RestorePassword />} />
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </ContentWrapper>
  );
};

export default Content;
