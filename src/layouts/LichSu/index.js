import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import LichSuTruyen from "./components/LichSuTruyen";

const LichSu = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Navbar />
      <LichSuTruyen/>
    </div>
  );
};

export default LichSu;
