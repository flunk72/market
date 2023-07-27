import { SidebarProps } from './Sidebar.props';
import { SidebarWrapper } from './Sidebar.styled';

const Sidebar = ({ children }: SidebarProps) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Sidebar;
