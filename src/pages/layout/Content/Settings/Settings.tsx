import {
  SettingsWrapper,
  Avatar,
  AccountData,
  CardAccount,
  CardPassword,
  ProfileName,
  ProfilePhone,
  ProfileEmail,
} from './Settings.styled';
import { EditIcon } from '../../../../helpers/icons';
import Sidebar from '../../../../components/Sidebar/Sidebar';

const Settings = () => {
  return (
    <SettingsWrapper>
      <Sidebar>
        <Avatar />
      </Sidebar>
      <AccountData>
        <CardAccount>
          <EditIcon />
          <ProfileName>Sergey Eromchenko</ProfileName>
          <ProfilePhone>8-999-999-99-99</ProfilePhone>
          <ProfileEmail>buratino@gmail.com</ProfileEmail>
        </CardAccount>
        <CardPassword>Ваш пароль</CardPassword>
      </AccountData>
    </SettingsWrapper>
  );
};

export default Settings;
