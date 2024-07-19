import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";
import Logged from "./components/login/Logged";
import Footer from "./components/Footer/Footer";
import FooterPage from "./Pages/FooterPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Logged />} />

      </Routes>
 <FooterPage/>
    </Router>
  );
};

export default App;
