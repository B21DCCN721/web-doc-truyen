import React from "react";
import { useState } from "react";

import anh1 from "../../../statics/images/anh1.jpg";
import xephang from "../../../statics/images/xephang.jpg";
import { Stack, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import danhsachtruyen from "../datas/danhsachtruyen";
import "../../../statics/css/danhsachtruyen-home.css";

const DanhSachTruyen = () => {
  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState("ngay");
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleClick = (button) => {
    setActiveButton(button);
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
                  className="card-container m-auto"
                  style={{
                    position: "relative",
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
                    className="card-title-overlay w-100"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
                      color: "white",
                      textAlign: "center",
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
        <div className="xephang d-flex flex-column align-items-center col-3 border-start">
          <h4 className="text-center">Bảng xếp hạng</h4>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className={`btn btn-outline-primary ${
                activeButton === "ngay" ? "active" : ""
              }`}
              onClick={() => handleClick("ngay")}
            >
              Top Ngày
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary ${
                activeButton === "thang" ? "active" : ""
              }`}
              onClick={() => handleClick("thang")}
            >
              Top Tháng
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary ${
                activeButton === "tuan" ? "active" : ""
              }`}
              onClick={() => handleClick("tuan")}
            >
              Top Tuần
            </button>
          </div>
          {danhsachtruyen.map((item, index) => (
            <div
              className="w-100 row justify-content-between align-items-center mt-3"
              key={index}
            >
              <h4 className="col-1 p-0 ms-1">{index + 1}</h4>
              <Link to={`/thongtintruyen/${item.id}`} className="link col-2 p-0">
                <img className="col-4 p-0" src={xephang} alt="..." />
              </Link>
              <div className="col-7 p-0">
                <Link to={`/thongtintruyen/${item.id}`} className="link">
                  <h6 className="text-nowrap text-truncate">
                    {item.tentruyen}
                  </h6>
                </Link>
                <Link to={`/thongtintruyen/${item.id}`} className="link">
                  <p className="m-0">
                    Chapter 1
                    <span>
                      <i className="fa-solid fa-eye me-2 ms-5"></i>
                      <i>{item.luotxem}</i>
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 mt-4">
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handlePageChange} />
        </Stack>
      </div>
    </div>
  );
};

export default DanhSachTruyen;
