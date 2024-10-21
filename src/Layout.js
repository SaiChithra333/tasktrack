import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./reusables/Header";
import Home from "./slides/Home";
import IconBanner from "./slides/IconBanner";
import NewLetter from "./slides/NewLetter";
import Popular from "./slides/Popular";
import Footer from "./reusables/Footer";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Render Header, IconBanner, Newsletter, and Footer only on home page */}
      {isHomePage && <Header />}
      {isHomePage && <Home />}
      {isHomePage && (
        <>
          <div className="icons m-8">
            <IconBanner />
          </div>
          <Popular />
          <div className="NewLetter flex justify-center items-center p-5">
            <NewLetter />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
