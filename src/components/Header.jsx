import React from "react";
import "../App.css";
import "../pages/Login.css";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="link">
          Todo App
        </Link>
      </h1>
      <span>
        <Link to={"/login"} className="link link-signOut">
          <FaSignOutAlt /> Sign Out
        </Link>
      </span>
    </div>
  );
};

export default Header;
