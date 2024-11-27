import React from "react";

import { Link } from "react-router-dom";

import '../../statics/css/dangnhap.css'

const DangKy = () => {
    return(
        <div class="container-fluid d-flex justify-content-center align-items-center" style={{height : "100vh"}}>
            <form className="dang_nhap">
                <h3 className="title">Đăng ký tài khoản</h3>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="floatingInput-name" placeholder="Nhập tên"/>
                    <label for="floatingInput-name">Name</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="email" class="form-control" id="floatingInput-email" placeholder="name@example.com"/>
                    <label for="floatingInput-email">Email address</label>
                </div>
                <div className="form-floating mb-5">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-5">
                    <input type="password" class="form-control" id="floatingPassword-confim" placeholder="Password"/>
                    <label for="floatingPassword-confim">Xác nhận mật khẩu</label>
                </div>
                <div>
                    <Link to = "/dangnhap">Đăng nhập</Link>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Đăng ký</button>
            </form>
        </div>
    )
}

export default DangKy;