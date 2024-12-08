import React from "react";
import { useState } from "react";

import anh1 from "../../../statics/images/anh1.jpg";

import { Stack, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import danhsachtruyen from "../datas/danhsachtruyen";
import "../../../statics/css/danhsachtruyen-home.css";
import XepHang from "./XepHang";

const DanhSachTruyen = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom">
      <h3 className="mb-3">
        <i className="fa-solid fa-list me-2"></i>
        Danh Sách Truyện
      </h3>
      <div className="content row">
        <div className="danhsachtruyen d-flex flex-wrap mb-3 col-9 row">
          {danhsachtruyen.map((item, index) => (
            <figure className="figure m-0 col-3" key={index}>
              <Link className="link" to={`/thongtintruyen/${item.id}`}>
                <div
                  className="card-container m-auto position-relative"
                  style={{
                    width: "190px",
                    height: "220px",
                  }}
                >
                  <img
                    src={anh1}
                    className="object-fit-cover w-100 h-100"
                    alt="..."
                  />
                  <div
                    className="card-title-overlay w-100 position-absolute bottom-0 text-white text-center"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
                    }}
                  >
                    <i className="fa-regular fa-heart"></i>
                    <span className="ms-2">{item.theodoi}</span>
                    <i className="fa-regular fa-eye ms-3"></i>
                    <span className="ms-2">{item.luotxem}</span>
                  </div>
                </div>
              </Link>
              <figcaption className="figure-caption">
                <h5 className="text-center text-nowrap text-truncate">
                  {item.tentruyen}
                </h5>
                <ul className="list-group" style={{ listStyle: "none" }}>
                  <li
                    className="d-flex justify-content-around"
                    style={{ height: "1.5rem", cursor: "pointer" }}
                  >
                    <p>Chapter 1</p>
                    <i>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      1 ngày trước
                    </i>
                  </li>
                  <li
                    className="d-flex justify-content-around"
                    style={{ height: "1.5rem", cursor: "pointer" }}
                  >
                    <p>Chapter 1</p>
                    <i>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      1 ngày trước
                    </i>
                  </li>
                  <li
                    className="d-flex justify-content-around"
                    style={{ height: "1.5rem", cursor: "pointer" }}
                  >
                    <p>Chapter 1</p>
                    <i>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      1 ngày trước
                    </i>
                  </li>
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
        <XepHang/>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 mt-4 mb-3">
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handlePageChange} />
        </Stack>
      </div>
    </div>
  );
};

export default DanhSachTruyen;
