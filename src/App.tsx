import { useState } from "react";
import Home from "./pages/layout/Content/Home/Home";
import Layout from "./pages/layout/Layout";
import { Styles } from "./styles.styled";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Styles />
    </BrowserRouter>
  );
}

function Main() {
  const [start, setStart] = useState(0);

  if (start === 0) return <Layout />;
  return <Home />;
}

export default App;
