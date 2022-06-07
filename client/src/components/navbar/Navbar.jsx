import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "./../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>Welcome, {user.username}!</span>
            <button onClick={handleClick} className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
