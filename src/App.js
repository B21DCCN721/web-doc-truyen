
import { Routes, Route, Navigate } from "react-router-dom";

import DangNhap from "./layouts/DangNhap";
import DangKy from "./layouts/DangKy";
import Home from "./layouts/Home";

function App() {
  return (
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element = {<Home/>} />
        <Route path="/dangnhap" element = {<DangNhap/>} />
        <Route path="/dangky" element = {<DangKy/>} />
    </Routes>
  );
}

export default App;
