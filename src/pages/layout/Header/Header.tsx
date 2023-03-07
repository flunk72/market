import Navigation from "../../../components/Navigation/Navigation";
import { navigation } from "../../../helpers/array/navigation";
import {
  BasketIcon,
  BurgerIcon,
  FavoritIcon,
  LogoIcon,
} from "../../../helpers/icons";
import { HeaderWrapper, IconBlock } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoIcon />
      <Navigation navigation={navigation} />
      <IconBlock>
        <FavoritIcon />
        <BasketIcon />
        <BurgerIcon />
      </IconBlock>
    </HeaderWrapper>
  );
};

export default Header;
