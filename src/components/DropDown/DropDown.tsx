import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { DropDownWrapper } from './DropDown.styled';

import { dropdownAccount } from '../../helpers/array/dropdownAccount';
interface Props {
  trigger: boolean;
}

const DropDown = ({ trigger }: Props) => {
  return (
    <>
      {trigger ? (
        <DropDownWrapper>
          <Navigation navigation={dropdownAccount} dropdown />
        </DropDownWrapper>
      ) : null}
    </>
  );
};

export default DropDown;
