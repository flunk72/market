import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar account-data';
  gap: 10px;
  height: 100%;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLvVixHKSuVD47xKe9TA83JzjoAUQOwcmGv_ylgOXfGfPFeXwwTDb2O_joF5vBybgYUk&usqp=CAU');
  background-size: cover;
  overflow: hidden;
`;

export const AccountData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-area: account-data;
  justify-items: center;
  gap: 15px;
`;

export const CardAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
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

export const CardPassword = styled(CardAccount)``;

export const ProfileName = styled.div``;

export const ProfilePhone = styled.div``;

export const ProfileEmail = styled.div``;
