import React from "react";

import "../../../statics/css/chap.css";
import chapter from "../../../statics/images/chapter.jpg";
import ChonChap from "./ChonChap";
import Comment from "./Comment";

const Chap = () => {
  const chapters = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
  ];
  return (
    <div className="container chap bg-secondary border border-secondary">
      <h4 className="text-white text-center">
        Tên truyện - Chapter 1{" "}
        <span>
          <i>Cập nhật lúc...</i>
        </span>
      </h4>
      <div className="chuyenchap bg-light-subtle rounded mb-5">
        <p className="text-center pt-3">
          Theo dõi truyện để ủng hộ nhóm dịch nhé.
        </p>
        <div class="alert alert-info text-center" role="alert">
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter
        </div>
        <div className="chonchap pb-3">
          <ChonChap chapters={chapters} />
        </div>
      </div>
      <div className="img-chapter w-100 d-flex flex-column justify-content-center align-items-center">
        <div id="page-1" className="page-chapter">
          <img
            className="object-fit-fill"
            src={chapter}
            alt="..."
            style={{ width: "800px", height: "2000px" }}
          />
        </div>
      </div>
      <div className="binhluan bg-light-subtle rounded mb-3 mt-4 pt-3">
        <ChonChap chapters={chapters} />
        <Comment />
      </div>
    </div>
  );
};

export default Chap;
