import React , {useState} from "react";
import { Link } from "react-router-dom";
import xephang from "../../../statics/images/xephang.jpg";
import danhsachtruyen from "../datas/danhsachtruyen";

const XepHang = () => {
    const [activeButton, setActiveButton] = useState("ngay");
    const handleClick = (button) => {
      setActiveButton(button);
    };
    return(
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
    )
}

export default XepHang;