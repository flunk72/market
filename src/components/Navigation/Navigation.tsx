import React from "react";
import { NavigationProps } from "../../interfaces/navigation";
import { Nav, NavLink } from "./Navigation.styled";

interface Props {
  navigation: NavigationProps[];
  sidebar: boolean;
}

const Navigation = ({ navigation, sidebar }: Props) => {
  return (
    <Nav sidebar={sidebar}>
      {navigation.map((nav: NavigationProps) => {
        const { path, name, id } = nav;
        return (
          <NavLink key={id} to={path || `products/${path}`} sidebar={sidebar}>
            {name}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default Navigation;
