import styled from "styled-components";
import * as router from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(router.NavLink)``;
