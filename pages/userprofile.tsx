import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function UserProfile() {
    let isVip = true;
    return (
        <Layout showFooter={true}>
            <div className="hero user-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1 style={{ marginLeft: '25.5%', textAlign: 'left' }}>Edward kennedy</h1>
                                <ul className="breadcumb">
                                    <li className="active"><Link href="/">Trang chủ</Link></li>
                                    <li> <span className="ion-ios-arrow-right"></span>Tài khoản</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buster-light">
                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="user-information">
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="images/uploads/user-img.png" alt="" />
                                            <br></br>
                                        </a>
                                        <a href="#" className="redbtn">Thay đổi</a>
                                        <a style={{ display: isVip ? "block" : "none" }} href="#">
                                            <img className="vipstatus" src="images/uploads/vip.png" alt="" />
                                            <br></br>
                                            <p> HIỆU LỰC ĐẾN 23/4/2022 </p>
                                        </a>
                                    </div>
                                    <div className="user-fav">
                                        <p>Chi tiết tài khoản</p>
                                        <ul>
                                            <li className="active"><Link href="userprofile">Tài khoản</Link></li>
                                            <li><Link href="watchedmovies">Phim đã xem</Link></li>
                                            <li><Link href="ratedmovies">Phim đã đánh giá</Link></li>
                                        </ul>
                                    </div>
                                    <div className="user-fav">
                                        <p>Khác</p>
                                        <ul>
                                            <li><Link href="watchlater">Xem sau</Link></li>
                                            <li><Link href="coupon">Nhập mã giảm giá</Link></li>
                                            <li><Link href="coupon">Gia hạn VIP</Link></li>
                                            <li><Link href="#">Đăng xuất</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <div className="form-style-1 user-pro" >
                                    <form action="#" className="user">
                                        <h4>01. Chi tiết tài khoản</h4>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Tên hiển thị</label>
                                                <input type="text" placeholder="edwardkennedy" />
                                            </div>
                                            <div className="col-md-6 form-it">
                                                <label>Email</label>
                                                <input type="text" placeholder="edward@kennedy.com" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Giới tính</label>
                                                <input type="text" placeholder="Male" readOnly />
                                            </div>
                                            <div className="col-md-6 form-it">
                                                <label>Tuổi</label>
                                                <input type="number" placeholder="23" readOnly />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <input className="submit" type="submit" value="Thay đổi" />
                                            </div>
                                        </div>
                                    </form>
                                    <form action="#" className="password">
                                        <h4>02. Đổi mật khẩu</h4>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Mật khẩu cũ</label>
                                                <input type="password" placeholder="**********" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Mật khẩu mới</label>
                                                <input type="password" placeholder="***************" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-it">
                                                <label>Nhập lại mật khẩu mới</label>
                                                <input type="password" placeholder="*************** " />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <input className="submit" type="submit" value="Thay đổi" />
                                            </div>
                                        </div>
                                    </form>
                                    <div style={{ display: isVip ? "block" : "none" }} className="payment">
                                        <h4>03. Thanh toán</h4>
                                        <p> Muốn trở thành VIP? </p>
                                        <Link href="payment">
                                            <button> THANH TOÁN </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}