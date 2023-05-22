import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid var(--primary);
  border-radius: 50%;
`;

export const AccountData = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  padding: 15px;
  box-shadow: 0 4px 16px 2px rgba(0, 26, 52, 0.16);
  border-radius: 10px;

  svg {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      fill: var(--primary);
    }
  }
`;

export const PasswordData = styled(AccountData)``;

export const ProfileName = styled.div``;

export const ProfilePhone = styled.div``;

export const ProfileEmail = styled.div``;
