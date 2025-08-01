import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Header />
      {/* page content */}
      <main className="main">
        <Outlet />
      </main>
      {/* Footer content */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
