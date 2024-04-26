import React from "react";
import Heading from "./Heading";
import Item from "./Item";
import ReactSlick from "./ReactSlick";
import Heading2 from "./Heading2";

const Services = () => {
  const item3 = {
    icon: "./images/service_3.png",
    iconStyle: "h-[85px] w-[85px] mr-auto ml-4",
    content: "Chuyển phát quốc tế",
    style: "text-ctBlue-1 text-base font-medium uppercase mr-auto md:h-8",
    text: "Bưu điện Việt Nam cung cấp đa dạng các dịch vụ chuyển phát ra ngoài lãnh thổ Việt Nam",
  };
  const item2 = {
    icon: "./images/service_2.png",
    iconStyle: "h-[85px] w-[85px] mr-auto ml-4",
    content: "Điện hoa,quà tặng",
    style: "text-ctBlue-1 text-base font-medium uppercase mr-auto md:h-8",
    text: "Là dịch vụ chuyển phát hoa, quà tặng từ người gửi tới người nhận, đáp ứng nhu cầu thăm hỏi, chia sẻ, chúc mừng... của khách hàng.",
  };
  const item1 = {
    icon: "./images/service_1.png",
    iconStyle: "h-[85px] w-[85px] mr-auto ml-4",
    content: "phân phối thiết bị viễn thông",
    style: "text-ctBlue-1 text-base font-medium uppercase mr-auto md:h-8",
    text: "Các sản phẩm phân phối, bán lẻ gồm các loại điện thoại di động kèm gói cước ưu đãi của các nhà mạng MobiFone và Vinaphone; các thiết bị đầu cuối truyền hình số, truyền hình Internet của truyền hình AVG, VTV, VTC, VNPT",
  };

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        },
      },
    ],
  };

  let setting2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#a4a4a4",
          borderRadius: "100%",
        }}
      ></div>
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container py-10">
        <div className="flex">
          <div className="w-[70%] flex flex-col justify-start md:w-full">
            <div className="mx-auto mb-8">
              <Heading content="Dịch vụ"></Heading>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-md">
              <ReactSlick seting={setting}>
                <ItemSlider item={item1}></ItemSlider>
                <ItemSlider item={item2}></ItemSlider>
                <ItemSlider item={item3}></ItemSlider>
                <ItemSlider item={item1}></ItemSlider>
                <ItemSlider item={item2}></ItemSlider>
                <ItemSlider item={item3}></ItemSlider>
              </ReactSlick>
            </div>
            <div className="mx-auto my-8">
              <Heading content="Sản Phẩm nổi bật"></Heading>
            </div>

            <div className="md:p-5">
              <ReactSlick seting={setting2}>
                <ItemFeature
                  imagePath="./products/featureProduct.png"
                  title="máy massage chân rfm36"
                  content="máy massage chân rfm36"
                ></ItemFeature>
                <ItemFeature
                  imagePath="./products/featureProduct.png"
                  title="máy massage chân rfm36"
                  content="máy massage chân rfm36"
                ></ItemFeature>
                <ItemFeature
                  imagePath="./products/featureProduct.png"
                  title="máy massage chân rfm36"
                  content="máy massage chân rfm36"
                ></ItemFeature>
                <ItemFeature
                  imagePath="./products/featureProduct.png"
                  title="máy massage chân rfm36"
                  content="máy massage chân rfm36"
                ></ItemFeature>
              </ReactSlick>
            </div>
          </div>
          <div className="pt-16 pl-12 md:hidden">
            <img src="./images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

function ItemSlider({ item }) {
  return (
    <>
      <div className="flex flex-col gap-4 h-[500px]">
        <div>
          <Item
            icon={item.icon}
            iconStyle={item.iconStyle}
            content={item.content}
            style={item.style}
          ></Item>
        </div>
        <div className="h-full p-3 text-sm font-light bg-white">
          {item.text}
        </div>
        <a
          className="px-2 text-white bg-ctYellow-1 w-fit rounded-[30px] hover:text-white mt-auto"
          href="#"
        >
          xem thêm
        </a>
      </div>
    </>
  );
}

function ItemFeature({ imagePath, title, content }) {
  return (
    <>
      <div className="flex items-start gap-5">
        <div className="h-[150px] w-[150px]">
          <img src={imagePath} alt="" />
        </div>
        <div className="flex flex-col gap-5 p-3">
          <Heading2 content={title}></Heading2>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}

//arrow:
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#F5F5F5" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#F5F5F5" }}
      onClick={onClick}
    />
  );
}
