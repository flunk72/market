import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { DropDownWrapper } from './DropDown.styled';

import { dropdownAccount } from '../../helpers/array/dropdownAccount';
interface Props {
  trigger: boolean;
}

const DropDown = ({ trigger }: Props) => {
  const user = true;

  const loginAccount = dropdownAccount.filter((item) => {
    if (!user) return item.id > 2;
    return item;
  });

  return (
    <>
      {trigger ? (
        <DropDownWrapper>
          <Navigation navigation={loginAccount} dropdown />
        </DropDownWrapper>
      ) : null}
    </>
  );
};

export default DropDown;
