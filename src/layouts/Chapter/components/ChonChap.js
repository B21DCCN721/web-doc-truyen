import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

const ChonChap = ({ chapters }) => {
  const { id } = useParams();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const handlePrevious = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  const handleSelect = (event) => {
    setCurrentChapterIndex(parseInt(event.target.value, 10));
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <Link className="link" to="/">
        <i className="fa-solid fa-house me-3"></i>
      </Link>
      <Link className="link" to={`/thongtintruyen/${id}`}>
        <i className="fa-solid fa-list me-3"></i>
      </Link>

      {/* Nút Previous */}
      <button
        className="btn btn-primary me-2"
        onClick={handlePrevious}
        disabled={currentChapterIndex === 0}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Dropdown chọn Chapter */}
      <select
        className="form-select"
        style={{ width: "200px" }}
        value={currentChapterIndex}
        onChange={handleSelect}
      >
        {chapters.map((chapter, index) => (
          <option key={index} value={index}>
            {chapter}
          </option>
        ))}
      </select>

      {/* Nút Next */}
      <button
        className="btn btn-primary ms-2"
        onClick={handleNext}
        disabled={currentChapterIndex === chapters.length - 1}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ChonChap;
