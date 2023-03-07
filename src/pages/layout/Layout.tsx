import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Content />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
