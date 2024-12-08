import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import anh1 from "../../../statics/images/anh1.jpg";
import { Link } from "react-router-dom";

import toptruyen from "../datas/toptruyen";

const TopTruyen = () => {
  return (
    <div className="container border-start border-end border-bottom bg-body-tertiary mt-5 rounded-bottom">
      <h3 className="mb-3">
        Top Đề Cử
        <span>
          <i className="fa-solid fa-fire ms-2"></i>
        </span>
      </h3>
      <div className="toptruyen-items w-100 mb-3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // Thời gian chờ (ms) giữa mỗi lần chuyển slide
            disableOnInteraction: true, // dừng autoplay khi người dùng tương tác
          }}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {toptruyen.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card-container col-2 m-auto position-relative"
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
                <Link to={`/thongtintruyen/${item.id}`}>
                  <div
                    className="card-title-overlay w-100 position-absolute bottom-0 text-white text-center"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
                    }}
                  >
                    <h6
                      className="mb-1 text-truncate"
                      style={{ cursor: "pointer" }}
                    >
                      {item.tentruyen}
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
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopTruyen;
