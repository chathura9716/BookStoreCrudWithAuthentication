import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container" style={{ fontSize: "20px" }}>
          <NavLink className="navbar-brand" style={{ fontSize: "20px" }} to="/" exact>
            BOOK STORE
          </NavLink>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link btn btn-link" activeClassName="active" to="/" exact>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-link" activeClassName="active" to="/books">
                  BOOKS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-link" activeClassName="active" to="/addbooks">
                  ADD BOOKS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-link" activeClassName="active" to="/managebooks">
                  MANAGE BOOKS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-link" activeClassName="active" to="/login">
                  LOGIN
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
