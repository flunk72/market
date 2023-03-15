import styled from "styled-components";
import * as router from "react-router-dom";

export const Nav = styled.div<{ sidebar: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.sidebar ? "column" : "row")};
  justify-content: space-around;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(router.NavLink)<{ sidebar: boolean }>`
  padding: ${(props) => (props.sidebar ? "0 0 20px 20px;" : "0 0 0 0")};
  &.active {
    color: var(--primary);
  }

  &:hover {
    color: var(--primary);
  }
`;
