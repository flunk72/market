import styled from "styled-components";
import { AccountIcon } from "../../../helpers/icons";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(320px, 768px) auto;
  align-items: center;
  justify-content: space-between;
  grid-area: header;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: var(--black);
    margin: 10px;
  }

  a {
    &.active {
      svg {
        fill: var(--primary);
      }
    }
  }
`;
export const AccountMenu = styled.div`
  position: relative;
`;
export const Account = styled(AccountIcon)<{ trigger?: boolean }>`
  cursor: pointer;
`;
