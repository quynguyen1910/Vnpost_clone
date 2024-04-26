import React from "react";

const Weather = () => {
  return (
    <>
      <div className="grid grid-cols-[0.3fr_0.7fr]">
        <div className="bg-[#f5f5f5] px-10 py-6 flex items-center justify-end">
            <p className=" text-end">Thời tiết</p>
        </div>
        <div className="bg-ctYellow-1">
            <div className="flex items-center gap-5 px-10 py-6">
                <img src="./icons/cloud-weather.svg" alt="" />
                <span className="text-2xl text-white ">°C</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
