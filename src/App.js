
import { Routes, Route, Navigate } from "react-router-dom";

import DangNhap from "./layouts/DangNhap";
import DangKy from "./layouts/DangKy";
import Home from "./layouts/Home";
import ThongTinTruyen from "./layouts/ThongTinTruyen";
import LichSu from "./layouts/LichSu";
import TheoDoi from "./layouts/TheoDoi";
import Chapter from "./layouts/Chapter";

function App() {
  return (
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element = {<Home/>} />
        <Route path="/dangnhap" element = {<DangNhap/>} />
        <Route path="/dangky" element = {<DangKy/>} />
        <Route path="/thongtintruyen/:id" element = {<ThongTinTruyen/>} />
        <Route path="/thongtintruyen/:id/:chapter" element = {<Chapter/>} />
        <Route path="/lichsu" element = {<LichSu/>} />
        <Route path="/theodoi" element = {<TheoDoi/>} />
    </Routes>
  );
}

export default App;
