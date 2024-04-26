import React, { useEffect, useRef } from "react";
import Heading from "./Heading";
import Heading2 from "./Heading2";

const New = () => {
  const news1 = {
    thumbnail: "./images/news1.jpg",
    title: "Bưu điện tỉnh Lào Cai khai trương gian hàng sản phẩm OCOP",
    desc: "Tháng Giêng hoa Đào bừng nở, đón xuân khoe sắc hồng tươi. Tháng Hai hoa Ban ngập tràn, tím biếc những gương mặt phố. Tháng Ba bất chợt một ngày trắng tinh hoa Sưa về đây",
  };
  const news2 = {
    thumbnail: "./images/news2.jpg",
    title: "Bưu điện Việt Nam khẳng định thương hiệu Quốc gia",
    desc: "Tháng Giêng hoa Đào bừng nở, đón xuân khoe sắc hồng tươi. Tháng Hai hoa Ban ngập tràn, tím biếc những gương mặt phố. Tháng Ba bất chợt một ngày trắng tinh hoa Sưa về đây",
  };
  const news3 = {
    thumbnail: "./images/news3.jpg",
    title: "Giới thiệu bộ tem “ “Hà Nội 12 mùa hoa – Bộ 1”",
    desc: "Tháng Giêng hoa Đào bừng nở, đón xuân khoe sắc hồng tươi. Tháng Hai hoa Ban ngập tràn, tím biếc những gương mặt phố. Tháng Ba bất chợt một ngày trắng tinh hoa Sưa về đây",
  };
  const news4 = {
    thumbnail: "./images/news4.jpg",
    title:
      "Tăng cường đảm bảo an toàn thông tin mạng dịp lễ 30/4, 1/5 và 70 năm chiến thắng Điện Biên Phủ",
    desc: "Tháng Giêng hoa Đào bừng nở, đón xuân khoe sắc hồng tươi. Tháng Hai hoa Ban ngập tràn, tím biếc những gương mặt phố. Tháng Ba bất chợt một ngày trắng tinh hoa Sưa về đây",
  };
  const news5 = {
    thumbnail: "./images/news5.jpg",
    title:
      "Liên hợp quốc phát hành tem về các loại động thực vật có huy cơ tuyệt chủng",
    desc: "Tháng Giêng hoa Đào bừng nở, đón xuân khoe sắc hồng tươi. Tháng Hai hoa Ban ngập tràn, tím biếc những gương mặt phố. Tháng Ba bất chợt một ngày trắng tinh hoa Sưa về đây",
  };
  const newsDataRv = [news1, news2, news3, news4, news5];
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const newsItems = document.querySelectorAll(".news-item h3");
    const newsItemActive = document.querySelector(".news-item h3.active");
    setTimeout(() => {
      if (index == 4) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    newsItems.forEach((item, i) => {
      if (i == index) {
        newsItemActive?.classList.remove("active");
        item.classList.add("active");
      }
    });
  }, [index]);

  return (
    <div className="bg-[url('/images/bg-news.png')] mb-10">
      <div className="container py-10">
        <div className="flex">
          <div className="w-[70%] flex flex-col justify-start md:w-full">
            <div className="mx-auto mb-8">
              <Heading content="Tin Tức"></Heading>
            </div>

            <div className="p-8 rounded-md">
              <div>
                <ul className="flex justify-center gap-10">
                  <li className="text-base font-normal text-ctBlue-1">
                    Khuyến mãi & mini game
                  </li>
                  <li className="text-base font-normal text-ctBlue-1">
                    Tin hoạt động
                  </li>
                  <li className="text-base font-normal text-ctBlue-1">
                    Thông tin hữu ích
                  </li>
                </ul>
              </div>
              <div className="grid gap-5 mt-12 lg:grid-cols-2 md:grid-rows-auto">
                {newsDataRv.map((item, i) => {
                  if (i == index) {
                    return (
                      <>
                        {" "}
                        <div className="flex flex-col gap-3 mb-5">
                          <div className="h-[275px]">
                            <img
                              className="rounded-xl ct-image"
                              src={item.thumbnail}
                              alt=""
                            />
                          </div>
                          <Heading2 content={item.title}></Heading2>
                          <p className="mt-3 text-xs font-light">
                            24 tháng 04,2024
                          </p>
                          <p>{item.desc}</p>
                          <a
                            className="px-2 text-white bg-ctYellow-1 w-fit rounded-[30px] hover:text-white lg:mt-auto"
                            href="#"
                          >
                            xem thêm
                          </a>
                        </div>
                      </>
                    );
                  }
                })}

                <div className="grid grid-rows-5 gap-4">
                  <ItemNews news={news1}></ItemNews>
                  <ItemNews news={news2}></ItemNews>
                  <ItemNews news={news3}></ItemNews>
                  <ItemNews news={news4}></ItemNews>
                  <ItemNews news={news5}></ItemNews>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 pl-12 w-[30%] md:hidden">
            <img src="./images/banner2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

function ItemNews({ news }) {
  const { thumbnail, title } = news;
  return (
    <>
      <div className="news-item grid grid-cols-[0.5fr_1fr] gap-5">
        <div className="h-[115px] rounded-lg shadow-2xl">
          <img className="rounded-lg ct-image" src={thumbnail} alt="" />
        </div>
        <div className="">
          <Heading2 content={title}></Heading2>
          <p className="mt-3 text-xs font-light">24 tháng 04,2024</p>
        </div>
      </div>
    </>
  );
}
