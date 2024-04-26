import React from "react";
import Item from "./Item";

const FormTracking = () => {
  return (
    <>
      <div>
        <div className="container mx-auto bg-[#FFC600] rounded-xl">
          <div className="flex items-center justify-between lg:px-[60px] lg:py-6 md:flex-col md:gap-y-5 md:p-5">
            <div className="flex flex-col justify-start gap-3 md:w-full">
              <div className="flex gap-1">
                <img src="./icons/tracking.svg" alt="" />
                <span className="text-base font-normal text-blue-800 capitalize">
                  Theo dõi bưu gửi
                </span>
              </div>
              <div>
                <form className="relative" action="">
                  <input
                    className="h-10 bg-white rounded-[30px] pl-4 lg:w-[520px] md:w-full placeholder:text-blue-800"
                    placeholder="Nhập mã bưu gửi"
                    type="text"
                  />
                  <input
                    className="absolute right-0 px-3 text-white -translate-x-4 -translate-y-1/2 bg-blue-800 cursor-pointer rounded-2xl top-1/2"
                    type="button"
                    value="Theo dõi"
                  />
                </form>
              </div>
            </div>
            <div className="flex gap-8 md:justify-evenly md:w-full">
              <Item
                icon="./icons/location.svg"
                content="tìm bưu cục"
                style="text-blue-800 text-sm font-normal capitalize"
              ></Item>
              <Item
                icon="./icons/calculator.svg"
                content="Ước tính cước"
                style="text-blue-800 text-sm font-normal capitalize"
              ></Item>
              <Item
                icon="./icons/postid.svg"
                content="Postid"
                style="text-blue-800 text-sm font-normal capitalize"
              ></Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTracking;
