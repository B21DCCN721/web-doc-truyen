import React from "react";
import "../../../statics/css/xacnhanhuy.css";

const XacNhanHuy = ({ bamXacNhan_Huy }) => {

  const handleHuy = () => {
    bamXacNhan_Huy(false);
  };

  const handleXacNhan = () => {
    bamXacNhan_Huy(false);
  };

  return (
    <div className="lopphu position-fixed start-0 top-0 w-100 h-100">
      <div className="dialog-huy position-absolute top-50 start-50 translate-middle border p-3 bg-light">
        <h5>
          <i className="fa-solid fa-triangle-exclamation me-2"></i>
          Xác nhận bỏ theo dõi truyện
        </h5>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-link text-decoration-none text-dark"
            onClick={handleHuy}
          >
            Hủy
          </button>
          <button
            type="button"
            className="btn btn-link text-decoration-none text-dark"
            onClick={handleXacNhan}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default XacNhanHuy;
