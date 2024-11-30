import React from "react";
import { useState } from "react";

import anh1 from "../../../statics/images/anh1.jpg";
import { Stack, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

const DanhSachTruyen = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom">
      <h3 className="mb-3">Danh sách truyện</h3>
      <div className="content row">
        <div className="d-flex justify-content-between flex-wrap mb-3 col-9">
          <figure className="figure m-0">
            <Link to="/thongtintruyen">
              <div
                className="card-container"
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
                  <i className="fa-regular fa-heart">
                    <span className="ms-2">5</span>
                  </i>
                  <i className="fa-regular fa-eye ms-3">
                    <span className="ms-2">5</span>
                  </i>
                </div>
              </div>
            </Link>
            <figcaption className="figure-caption">
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
        </div>
        <div className="d-flex flex-column align-items-center col-3 border-start">
          <h4 className="text-center">Bảng xếp hạng</h4>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              Top Ngày
            </button>
            <button type="button" className="btn btn-primary">
              Top Tháng
            </button>
            <button type="button" className="btn btn-primary">
              Top Tuần
            </button>
          </div>
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
