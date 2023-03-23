import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { DropDownWrapper, Menu, MenuItem } from "./DropDown.styled";

import { dropdownAccount } from "../../helpers/array/dropdownAccount";
import { NavLink } from "react-router-dom";
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
