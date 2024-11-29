import React from "react";

import anh1 from "../../../statics/images/anh1.jpg";

const TopTruyen = () => {
  return (
    <div className="container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom">
      <h3 className="mb-3">
        Top Đề Cử
        <span>
          <i className="fa-solid fa-fire ms-2"></i>
        </span>
      </h3>
      <div className="d-flex justify-content-between flex-wrap w-100 mb-3">
        <div
          className="card-container"
          style={{
            position: "relative",
            width: "190px",
            height: "220px",
          }}
        >
          <img src={anh1} className="object-fit-cover w-100 h-100" alt="..." />
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
            <h6 className="mb-1" style={{ cursor: "pointer" }}>
              Card title
            </h6>
            <div className="d-flex justify-content-around">
              <p>Chapter 1</p>
              <i>
                <span>
                  <i className="fa-regular fa-clock"></i>
                </span>
                1 ngày trước
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTruyen;
