import React, { useState } from "react";

const dataMenu = [
  "Hành chính công",
  "Cá nhân",
  "Doanh nghiệp",
  "Hỗ trợ",
  "Tuyển Dụng",
  "Tin tức",
  "Giới thiệu",
  "Đăng nhập",
];

const Header = () => {
  const [show, setShow] = useState(false);
  const showMenu = (e) => {
    setShow(!show)
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full bg-white shadow-ctShadow-1">
        <div className="container flex items-center justify-between py-3 mx-auto md:px-5">
          <h1 className="mr-5">
            <a href="/">
              <img src="./images/logo_global.png" alt="logo" />
            </a>
          </h1>
          <ul className="flex gap-5 mr-auto md:hidden">
            <li>
              <a
                className="font-medium leading-6 uppercase text-ctBlack-1"
                href="#"
              >
                Hành chính công
              </a>
            </li>
            <li>
              <a
                className="font-medium leading-6 uppercase text-ctBlack-1"
                href="#"
              >
                Cá nhân
              </a>
            </li>
            <li>
              <a
                className="font-medium leading-6 uppercase text-ctBlack-1"
                href="#"
              >
                Doanh nghiệp
              </a>
            </li>
          </ul>
          <ul className="flex gap-5 md:hidden">
            <li>
              <a className="flex gap-2" href="#">
                <i>
                  <img src="./icons/introduce.svg" alt="" />
                </i>
                <span className="text-base font-normal text-ctBlack-1">
                  Giới thiệu
                </span>
              </a>
            </li>
            <li>
              <a className="flex gap-2" href="#">
                <i>
                  <img src="./icons/book.svg" alt="" />
                </i>
                <span className="text-base font-normal text-ctBlack-1">
                  Tin tức
                </span>
              </a>
            </li>
            <li>
              <a className="flex gap-2" href="#">
                <i>
                  <img src="./icons/support.svg" alt="" />
                </i>
                <span className="text-base font-normal text-ctBlack-1">
                  Hỗ trợ
                </span>
              </a>
            </li>
            <li>
              <a className="flex gap-2" href="#">
                <i>
                  <img src="./icons/tuyen-dung.svg" alt="" />
                </i>
                <span className="text-base font-normal text-ctBlack-1">
                  Tuyển dụng
                </span>
              </a>
            </li>
            <li>
              <a className="flex gap-2" href="#">
                <i>
                  <img src="./icons/login.svg" alt="" />
                </i>
                <span className="text-base font-normal text-ctBlack-1">
                  Đăng nhập
                </span>
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button onClick={showMenu}>
              <img src="./icons/icon-menu-bar.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      {show && (
        <div className="fixed top-0 left-0 z-20 w-full h-full  bg-[#F8AF19]">
          <h3 className="p-3 text-3xl font-bold text-white uppercase">
            danh mục
          </h3>
          <ul className="text-white bg-[#F2A40B]">
            {dataMenu.map((item) => {
              return (
                <>
                  <li className="px-3 py-4 border-b cursor-pointer border-b-white">
                    <a href=""></a>
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
          <button
            onClick={showMenu}
            className="absolute top-0 right-0 bg-transparent"
          >
            <img src="./icons/cancel-model.svg" alt="" />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
