import React from "react";
import { useState } from "react";

import anh1 from "../../../statics/images/anh1.jpg";
import { Stack, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import danhsachtruyen from "../datas/danhsachtruyen";

const LichSuTruyen = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="lichsu container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom">
      <h3 className="mb-3">
        <i className="fa-solid fa-clock-rotate-left me-2"></i>
        Lịch Sử Đọc Truyện
      </h3>
      <div className="content row">
        <div className="danhsachtruyen d-flex flex-wrap mb-3 row">
          {danhsachtruyen.map((item, index) => (
            <figure className="figure m-0 col-2" key={index}>
              <div
                className="card-container m-auto"
                style={{
                  position: "relative",
                  width: "190px",
                  height: "220px",
                }}
              >
                <Link to={`/thongtintruyen/${item.id}`}>
                  <img
                    src={anh1}
                    className="object-fit-cover w-100 h-100"
                    alt="..."
                  />
                </Link>
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
                  <i className="fa-solid fa-trash-can"></i>
                  <span className="ms-2">Xóa</span>
                </div>
              </div>

              <figcaption className="figure-caption">
                <h5 className="text-center text-nowrap text-truncate">
                  {item.tentruyen}
                </h5>
                <p className="d-flex justify-content-between">
                  Chapter 1
                  <span>
                    <i>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      1 ngày trước
                    </i>
                  </span>
                </p>
              </figcaption>
            </figure>
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

export default LichSuTruyen;
