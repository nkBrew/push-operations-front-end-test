import React from "react";
import User from "../User/User";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header-flex">
        <div className="header-title">{title}</div>
        <User />
      </div>
    </div>
  );
};

export default Header;
