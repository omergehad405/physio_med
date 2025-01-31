import React from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { HashRouter, Routes, Route } from "react-router";
import ServicesPage from "./ServicesPage/ServicesPage";
function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
