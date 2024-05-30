import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
