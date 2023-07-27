import React, { useEffect, useState } from 'react';
import { NavigationProps } from '../../types/navigation';
import { Nav, NavLink } from './Navigation.styled';
import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface Props {
  navigation: NavigationProps[];
  sidebar?: string;
  dropdown?: boolean;
}

const Navigation = ({ navigation, sidebar, dropdown }: Props) => {
  return (
    <Nav sidebar={sidebar} dropdown={dropdown}>
      {navigation.map((nav: NavigationProps) => {
        const { path, name, id } = nav;
        return (
          <NavLink key={id} to={path} sidebar={sidebar} dropdown={dropdown}>
            {name}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default Navigation;
