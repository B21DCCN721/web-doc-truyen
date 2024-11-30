import React from "react";

import Navbar from "../Navbar";
import TopTruyen from "./components/TopTruyen";
import DanhSachTruyen from "./components/DanhSachTruyen";
import Header from "../Header";

const Home = () => {
  return (
    <div class="container-fluid p-0">
      <Header />
      <Navbar />
      <TopTruyen />
      <DanhSachTruyen />
    </div>
  );
};

export default Home;
