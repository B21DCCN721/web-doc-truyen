import React from "react";

import Navbar from "../Navbar";
import TopTruyen from "./components/TopTruyen";
import DanhSachTruyen from "./components/DanhSachTruyen";

const Home = () => {
  return (
    <div class="container-fluid p-0">
      <Navbar />
      <TopTruyen />
      <DanhSachTruyen />
    </div>
  );
};

export default Home;
