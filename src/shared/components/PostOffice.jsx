import React from "react";
import Heading from "./Heading";

const PostOffice = () => {
  return (
    <>
      <div className="container grid md:p-5 lg:grid-cols-[0.7fr_0.3fr] gap-5 p-14">
        <div>
          <div className="mb-5 text-center">
            <Heading content="bưu điện số"></Heading>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-auto">
            {Array(6)
              .fill(0)
              .map((item) => {
                return (
                  <>
                    <Item
                      imagePath="./icons/vnpost.png"
                      title="My Vietnam Post Plus"
                    ></Item>
                  </>
                );
              })}
          </div>
        </div>

        <div className="">
          <img src="./images/buu-dien-so.png" alt="" />
          <p>
            Bưu điện Việt Nam nỗ lực tạo dựng Hệ sinh thái số, mang cuộc sống số
            tới khách hàng thông qua các ứng dụng thân thiện, tin cậy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PostOffice;

function Item({ imagePath, title }) {
  return (
    <>
      <div className="flex gap-5  bg-[#f5f5f5] rounded-xl shadow-ctShadow-1 p-5">
        <div>
          <img src={imagePath} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-[#a4a4a4] font-bold md:text-sm">{title}</p>
          </div>
          <div className="text-[#a4a4a4] md:text-xs">
            <span>Tải ngay:</span>
            <a className="mr-3" href="">
              Android app
            </a>
            <a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</a>
            <a className="ml-3" href="">
              iOS app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
