import React from "react";
import { ContentWrapper } from "./Content.styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Support from "./Support/Support";
import SingleCategory from "./Products/ProductContent/SingleCategory/SingleCategory";

const Content = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/products/:path" element={<SingleCategory />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </ContentWrapper>
  );
};

export default Content;
