import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/pages/Home/Home";
import Assessment from "./container/pages/Assesment/Assessment";
import Soon from "./container/pages/Soon/Soon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Assessment" element={<Assessment />} />
        <Route exact path="/Soon" element={<Soon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
