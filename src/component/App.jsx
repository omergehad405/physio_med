import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { Routes, Route, useLocation } from "react-router";
import ServicesPage from "./ServicesPage/ServicesPage";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
     
      await new Promise((resolve) => setTimeout(resolve, 4000)); 
      setLoading(false);
    };
    fetchData();
  }, [location]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="fade-in">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
