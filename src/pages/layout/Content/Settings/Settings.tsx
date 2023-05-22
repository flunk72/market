import {
  SettingsWrapper,
  Avatar,
  AccountData,
  PasswordData,
  ProfileName,
  ProfilePhone,
  ProfileEmail,
} from './Settings.styled';
import { EditIcon } from '../../../../helpers/icons';

const Settings = () => {
  return (
    <SettingsWrapper>
      <Avatar />
      <AccountData>
        <EditIcon />
        <ProfileName>Sergey Eromchenko</ProfileName>
        <ProfilePhone>8-999-999-99-99</ProfilePhone>
        <ProfileEmail>buratino@gmail.com</ProfileEmail>
      </AccountData>
      <PasswordData>Ваш пароль</PasswordData>
    </SettingsWrapper>
  );
};

export default Settings;
