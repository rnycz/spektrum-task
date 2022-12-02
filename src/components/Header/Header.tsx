import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <span>Radosław Nycz</span>
      <NavLink to="/form">
        <button className="header-button">formularz rejestracyjny</button>
      </NavLink>
    </header>
  );
};

export default Header;
