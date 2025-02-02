import React from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import ServicesPage from "./ServicesPage/ServicesPage";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
