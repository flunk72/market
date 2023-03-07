import styled from "styled-components";

export const SidebarWrapper = styled.div`
  grid-area: sidebar;

  @media (max-width: 600px) {
    display: none;
  }
`;
