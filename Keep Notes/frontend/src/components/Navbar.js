import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  let navigate = useNavigate();

  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={!localStorage.getItem("token") ? `/` : "/home"}
        >
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="mx-2 d-inline-block align-text-top"
          />
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/home" ? "active" : ""
                  }`}
                aria-current="page"
                to={!localStorage.getItem("token") ? `/` : "/home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""
                  }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-warning mx-1" to="/signup" role="button">
                Sign Up
              </Link>
            </form>
          ) : (
            <div className="d-flex">
              <button onClick={handleLogout} className="btn btn-warning">
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;