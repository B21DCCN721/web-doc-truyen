
import { Routes, Route, Navigate } from "react-router-dom";

import DangNhap from "./layouts/DangNhap";
import DangKy from "./layouts/DangKy";
import Home from "./layouts/Home";
import ThongTinTruyen from "./layouts/ThongTinTruyen";

function App() {
  return (
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element = {<Home/>} />
        <Route path="/dangnhap" element = {<DangNhap/>} />
        <Route path="/dangky" element = {<DangKy/>} />
        <Route path="/thongtintruyen" element = {<ThongTinTruyen/>} />
    </Routes>
  );
}

export default App;
