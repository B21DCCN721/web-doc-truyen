import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to = '/dangnhap'>Navbar</NavLink>
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
