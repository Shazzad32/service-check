import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceCheck from "./ServiceCheck";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<ServiceCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
