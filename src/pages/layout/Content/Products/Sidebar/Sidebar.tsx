import React from "react";
import { SidebarWrapper } from "./Sidebar.styled";
import { sidebarMenu } from "../../../../../helpers/array/sidebarMenu";
import Navigation from "../../../../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Navigation navigation={sidebarMenu} sidebar />
    </SidebarWrapper>
  );
};

export default Sidebar;
