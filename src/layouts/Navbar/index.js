import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar border-bottom border-body"
      style={{ backgroundColor: "#e3f2fd", marginTop:'50px' }}
    >
      <div className="container-fluid">
        <div className="d-flex">
          <NavLink className="navbar-brand fw-bold" to="/">
            VoCuc
            <i className="fa-solid fa-house ms-3"></i>
          </NavLink>
          <ul className="navbar-nav d-flex flex-row ms-3">
            <li className="nav-item me-3">
              <NavLink className="nav-link fw-semibold" to="#">
                HOT
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link fw-semibold" to="#">
                LỊCH SỬ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="#">
                THEO DÕI
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
