import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Amass
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/signin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/events"
              className={
                window.location.pathname === "/events"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
