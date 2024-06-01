import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import Product from "./page/Product";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
