import React from "react";
import Heading from "./Heading";
import Item from "./Item";
import CountUp from "react-countup";
const ImpressiveFigures = () => {
  return (
    <>
      <div className="bg-[url(/images/bg-impressive-figures.png)] bg-no-repeat bg-cover py-10">
        <div className="container p-5">
          <div className="mb-5 text-center">
            <Heading content="số liệu ấn tượng"></Heading>
          </div>
          <div className="grid p-5 text-2xl uppercase ld:grid-cols-3 md:grid-rows-auto md:gap-5">
            <div className="flex flex-col items-center justify-around gap-5">
              <Item
                icon="./icons/giao-dich.svg"
                iconStyle="h-[54px] w-[54px]"
                content="giao dịch tài chính"
                style="text-ctBlue-1 font-normal uppercase"
              ></Item>
              <div className="ct-countUp">
                <CountUp enableScrollSpy={true} end={33000000} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <Item
                  icon="./icons/diem-giao-dich.svg"
                  iconStyle="h-[54px] w-[54px]"
                  content="điểm giao dịch"
                  style="text-ctBlue-1 font-normal uppercase"
                ></Item>
                              <div className="ct-countUp">
                <CountUp enableScrollSpy={true} end={13000} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <Item
                  icon="./icons/box.svg"
                  iconStyle="h-[54px] w-[54px]"
                  content="Bưu gửi được vận chuyển"
                  style="text-ctBlue-1 font-normal uppercase"
                ></Item>
                              <div className="ct-countUp">
                <CountUp enableScrollSpy={true} end={1851000000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpressiveFigures;
