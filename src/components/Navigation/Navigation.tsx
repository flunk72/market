import { NavigationProps } from "../../interfaces/navigation";
import { Nav, NavLink } from "./Navigation.styled";
import { Outlet } from "react-router-dom";

interface Props {
  navigation: NavigationProps[];
}

const Navigation = ({ navigation }: Props) => {
  return (
    <Nav>
      {navigation.map((nav: NavigationProps) => {
        const { path, name } = nav;
        return (
          <NavLink key={path} to={path}>
            {name}
          </NavLink>
        );
      })}
      <Outlet />
    </Nav>
  );
};

export default Navigation;
