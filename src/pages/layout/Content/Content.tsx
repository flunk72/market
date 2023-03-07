import React from "react";
import { ContentWrapper } from "./Content.styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";

const Content = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="" element={<Navigate to="/home" replace />} />
      </Routes>
    </ContentWrapper>
  );
};

export default Content;
