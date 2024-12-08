import React from "react";

import Header from "../Header";
import Navbar from "../Navbar";
import Comment from "./components/Comment";

import "../../statics/css/thongtintruyen.css";

import biatruyen from "../../statics/images/biatruyen.jpg";
import { useNavigate, useParams } from "react-router-dom";

const ThongTinTruyen = () => {
  const {id} = useParams()
  console.log(id);

  const navigate = useNavigate();
  
  return (
    <div className="container-fluid p-0">
      <Header />
      <Navbar />
      <div className="container border border-top-0 rounded-bottom mt-5 d-flex flex-column align-items-center">
        <h3>Tên Truyện</h3>
        <i>Cập nhật lúc</i>
        <div className="thongtin w-100 mb-3 row">
          <img src={biatruyen} className="col-2 biatruyen" alt="..." />
          <div className="chitiet col-4">
            <ul className="chitiet-list">
              <li className="row">
                <p className="col-4">
                  <i className="fa-solid fa-user me-1"></i>
                  Tác giả
                </p>
                <p className="col-8">Tên tác giả</p>
              </li>
              <li className="row">
                <p className="col-4">
                  <i className="fa-solid fa-chart-line me-1"></i>
                  Tình trạng
                </p>
                <p className="col-8">Đang tiến hành</p>
              </li>
              <li className="row">
                <p className="col-4">
                  <i className="fa-solid fa-list me-1"></i>
                  Thể loại
                </p>
                <p className="col-8">Hiện đại - Tu tiên - Huyền huyễn</p>
              </li>
              <li className="row">
                <p className="col-4">
                  <i className="fa-solid fa-eye me-1"></i>
                  Lượt xem
                </p>
                <p className="col-8">100000</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="theodoi d-flex align-items-center mb-5">
          <button type="button" className="btn btn-primary me-4" onClick={() => (navigate(`/thongtintruyen/${id}/chapter 01`))}>
            Đọc từ đầu
          </button>
          <button type="button" className="btn btn-primary me-4">
            Đọc mới nhất
          </button>
          <button type="button" className="btn btn-primary me-4">
            <i className="fa-regular fa-heart me-2"></i>
            Theo dõi
          </button>
          <p className="m-0">Số lượt theo dõi: 1000</p>
        </div>
        <div className="tomtat w-100">
          <h4 className="border-bottom border-info">
            <i className="fa-regular fa-file-lines me-2"></i>
            TÓM TẮT NỘI DUNG TRUYỆN
          </h4>
          <p>Nội dung truyện bla bla ...</p>
        </div>
        <div className="danhsachchap w-100 mb-3">
          <h4 className="border-bottom border-info">
            <i className="fa-solid fa-list me-2"></i>
            DANH SÁCH CHƯƠNG
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  Số chương
                  <i className="fa-solid fa-sort ms-2"></i>
                </th>
                <th scope="col">Cập nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => navigate(`/thongtintruyen/${id}/chapter 1`)}>
                <td>1</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="binhluan w-100">
          <h4 className="border-bottom border-info mb-4">
            <i className="fa-regular fa-comment"></i>
            BÌNH LUẬN
          </h4>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default ThongTinTruyen;
