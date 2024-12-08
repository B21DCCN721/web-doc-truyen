import React from "react";
import { useState } from "react";

import anh1 from "../../../statics/images/anh1.jpg";
import { Stack, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

import danhsachtruyen from "../datas/danhsachtruyen";
import XacNhanHuy from "./XacNhanHuy";

const TruyenTheoDoi = () => {
  const [page, setPage] = useState(1);
  const [isDialog, setIsDialog] = useState(false);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const hienDialog = () => {
    setIsDialog(true);
  }
  const dongDialog = (check) => {
    setIsDialog(check);
  }
  return (
    <div
      className="lichsu container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom"
    >
      <h3 className="mb-3">
        <i className="fa-regular fa-heart me-2"></i>
        Truyện Đã Theo Dõi
      </h3>
      <div className="content row">
        <div className="danhsachtruyen d-flex flex-wrap mb-3 row">
          {danhsachtruyen.map((item, index) => (
            <figure className="figure m-0 col-2" key={index}>
              <div
                className="card-container m-auto position-relative"
                style={{
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
                  className="card-title-overlay w-100 position-absolute bottom-0 text-white text-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
                    cursor: "pointer",
                  }}
                  onClick={hienDialog}
                >
                  <i className="fa-solid fa-trash-can"></i>
                  <span className="ms-2">Bỏ Theo Dõi</span>
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
      {isDialog && <XacNhanHuy bamXacNhan_Huy={dongDialog} />}
      <div className="d-flex justify-content-center align-items-center w-100 mt-4">
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handlePageChange} />
        </Stack>
      </div>
    </div>
  );
};

export default TruyenTheoDoi;
