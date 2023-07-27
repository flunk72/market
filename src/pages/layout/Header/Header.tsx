import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../../../components/DropDown/DropDown';
import Navigation from '../../../components/Navigation/Navigation';
import { navigation } from '../../../helpers/array/navigation';
import { BasketIcon, BurgerIcon, FavoritIcon, LogoIcon } from '../../../helpers/icons';
import { HeaderWrapper, IconBlock, Account, AccountMenu } from './Header.styled';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <LogoIcon />
      <Navigation navigation={navigation} />
      <IconBlock>
        <NavLink to="/favorit">
          <FavoritIcon />
        </NavLink>
        <NavLink to="/basket">
          <BasketIcon />
        </NavLink>
        <AccountMenu>
          <Account onClick={() => setOpen(!open)} />
          <DropDown trigger={open} />
        </AccountMenu>
      </IconBlock>
    </HeaderWrapper>
  );
};

export default Header;
