import React from "react";

const FooterBottom = () => {
  return (
    <>
      <div className="py-5 bg-ctYellow-1 md:px-5">
        <div className="container flex items-center justify-between md:flex-col md:gap-5 md:items-start">
          <div className="font-medium ">
            <span className="text-xl text-white">Hotline</span>
            <p className="text-3xl font-bold text-white">1900 54 54 81</p>
          </div>
          <div className="text-xl text-white">Kết Nối Với Chúng Tôi</div>
          <div>
            <img src="./images/bocongthuong.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
