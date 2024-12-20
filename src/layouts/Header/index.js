import React from "react";
import { Link } from "react-router-dom";

import "../../statics/css/header.css";

import yae from "../../statics/images/yae1.png";
import avatar from "../../statics/images/avatar.jpg";

const Header = () => {
  return (
    <header
      className="w-100 d-flex align-items-center justify-content-between border-bottom fixed-top"
      style={{ backgroundColor: "#edceeb", height: "50px" }}
    >
      <Link to="/" className="link">
        <div className="header-img d-flex align-items-center justify-content-around ms-3">
          <img
            src={yae}
            className="object-fit-cover rounded-circle me-3"
            alt="..."
          />
          <h4>Thiên Tàng Truyện</h4>
        </div>
      </Link>
      <div className="d-flex">
        <img
          src={avatar}
          className="object-fit-cover rounded-circle me-3"
          alt="..."
        />
        <ul
          className="d-flex align-items-center justify-content-between mb-0 me-3 p-0"
          style={{ listStyle: "none", cursor: "pointer" }}
        >
          <Link
            to="/dangnhap"
            className="pe-2 border-end border-black text-dark"
          >
            <li>Đăng nhập</li>
          </Link>
          <Link to="/dangky" className="ps-2 text-dark">
            <li>Đăng ký</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
