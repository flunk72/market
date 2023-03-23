import styled from "styled-components";
import * as router from "react-router-dom";

export const Nav = styled.div<{ sidebar?: boolean; dropdown?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.sidebar || props.dropdown ? "column" : "row"};
  justify-content: space-around;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled(router.NavLink)<{
  sidebar?: boolean;
  dropdown?: boolean;
}>`
  padding: ${(props) =>
    props.sidebar
      ? "0 0 20px 20px;"
      : props.dropdown
      ? "10px 0 10px 5px"
      : "0 0 0 0"};

  &.active {
    background: ${(props) => (props.dropdown ? "#FAFAFA" : "none")};
    color: var(--primary);
  }

  &:hover {
    background: ${(props) => (props.dropdown ? "#FAFAFA" : "none")};
    color: var(--primary);
  }
`;
