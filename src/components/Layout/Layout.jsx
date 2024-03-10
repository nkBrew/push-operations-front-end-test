import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Header title="Employees" />
        {children}
      </main>
    </div>
  );
};

export default Layout;
