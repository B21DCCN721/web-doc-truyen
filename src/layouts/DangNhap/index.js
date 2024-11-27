import React from "react";

import { Link } from "react-router-dom";

import '../../statics/css/dangnhap.css'

const DangNhap = () => {
    return(
        <div class="container-fluid d-flex justify-content-center align-items-center" style={{height : "100vh"}}>
            <form className="dang_nhap">
                <h3 className="title">Đăng nhập tài khoản</h3>
                <div className="form-floating mb-3 mt-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-5">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div>
                    <Link to = "" className="me-3">Quên mật khẩu</Link>
                    <Link to = "/dangky">Đăng ký</Link>
                </div>
                <Link to = '/' className="mx-auto">
                    <button type="submit" class="btn btn-primary mt-2">Đăng nhập</button>
                </Link>
            </form>
        </div>
    )
}

export default DangNhap;