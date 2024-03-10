import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Employees", path: "/" },
  { label: "Scheduler", path: "/scheduler" },
  { label: "Timetracking", path: "/timetracking" },
];

const Navbar = () => {
  const location = useLocation();

  const renderItems = () => {
    const renderCurrent = (path) => {
      const { pathname } = location;
      return pathname === path;
    };

    return links.map((l) => (
      <li
        className={
          renderCurrent(l.path) ? "navbar-item-current" : "navbar-item"
        }
        key={`link-${l.label}`}
      >
        <Link className="link" to={l.path}>
          <div>{l.label}</div>
        </Link>
      </li>
    ));
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: "700",
              paddingLeft: "14px",
            }}
          >
            <div>Push</div>
          </div>
        </div>
        <ul className="navbar-items-container">{renderItems()}</ul>
      </div>
    </div>
  );
};

export default Navbar;
