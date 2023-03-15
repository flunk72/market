import React from "react";
import { Outlet } from "react-router-dom";
import Content from "./Content/Content";
import Header from "./Header/Header";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Content />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
