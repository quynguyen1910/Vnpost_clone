import React from "react";
import Heading from "./Heading";

const FeatureProducts = () => {
  return (
    <>
      <div className="container py-10">
        <div className="flex">
          <div className="w-[70%] flex flex-col justify-start">
            <div className="mx-auto mb-8">
              <Heading content="Sản Phẩm nội bật"></Heading>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
