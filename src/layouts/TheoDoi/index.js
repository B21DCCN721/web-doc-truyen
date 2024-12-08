import React, { useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import TruyenTheoDoi from "./components/TruyenTheoDoi";

const TheoDoi = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <Header />
      <Navbar />
      <TruyenTheoDoi />
    </div>
  );
};

export default TheoDoi;
