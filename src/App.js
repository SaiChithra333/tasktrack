import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IconBanner from "./slides/IconBanner";
import Popular from "./slides/Popular";
import Footer from "./reusables/Footer";
import NewLetter from "./slides/NewLetter";
import Home from "./slides/Home";
import Header from "./reusables/Header";
import Layout from "./Layout"; // New layout component
import FullCard from "./slides/FullCard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import RegisterPro from "./Auth/RegisterPro";
import Professional from "./slides/Professional";
import Customer from "./slides/Customer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MiniDrawer from "./reusables/MiniDrawer";
import Payment from "./slides/Payment";
import About from "./slides/About";
import Contact from "./slides/Contact";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top
    }, [pathname]); // Trigger on every route change

    return null;
  };

  return (
    <Router>
      {/* <Header/> */}
      <ScrollToTop />
      <Routes>
        {/* Route for homepage with all components */}

        {/* Route for the Popular page that renders only Popular */}
        <Route path="/popular" element={<Popular />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/popular/fullcard" element={<FullCard />} />
        <Route path="/fullcard" element={<FullCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerpro" element={<RegisterPro />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/" element={<Layout />} />
        <Route path="/mini" element={<MiniDrawer />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
