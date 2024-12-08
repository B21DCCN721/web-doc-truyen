import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ( {hienTheLoai} ) => {
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
            <li className="nav-item nav-link fw-semibold me-3">
              <button className="nav-link btn fw-semibold p-0 border-0 text text-decoration-none text-dark">
                THỂ LOẠI
              </button>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link fw-semibold text-dark" to="/lichsu">
                LỊCH SỬ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-dark" to="/theodoi">
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
