import React from "react";

const FooterTop = () => {
  const dataFooter = [
    {
      title: "Cá Nhân",
      items: ["Tài chính cá nhân", "Mua sắm", "Giải trí", "Chuyển phát"],
    },
    {
      title: "Doanh Nghiệp",
      items: [
        "Logistics",
        "Thu hộ",
        "Chi hộ",
        "Truyền Thông",
        " Quảng Cáo",
        "Dịch vụ số",
        "Chuyển phát",
      ],
    },
    {
      title: "Hành Chính Công",
      items: ["Trả kết quả TTHC", "Tiếp nhận TTHC", "Thu hộ, chi hộ HCC"],
    },
    {
      title: "Tin Tức",
      items: ["Tin hoạt động", "Tin khuyến mại", "Thông tin hữu ích"],
    },
    {
      title: "Giới Thiệu",
      items: [
        "Thông tin dịch vụ",
        "Thông tin chung",
        " Thông tin doanh nghiệp",
        "Thông tin chất lượng",
      ],
    },
  ];
  return (
    <>
      <div className="bg-[#444444] pt-10 pb-3">
        <div className="container grid gap-2 text-white lg:grid-cols-6 md:gap-5 md:px-5">
          <div className="flex flex-col gap-3">
            <div>
              <img src="./images/logo-footer.png" alt="" />
            </div>
            <h2 className="text-xl font-bold">
              TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM
            </h2>
            <p>
              Địa chỉ: Số 05 đường Phạm Hùng - Mỹ Đình 2 - Nam Từ Liêm - Hà Nội
              - Việt Nam
            </p>
            <p>
              Ghi rõ nguồn &quot;vietnampost.vn&quot; khi phát hành lại thông
              tin từ website này
            </p>
          </div>
          {dataFooter.map((data) => {
            return (
              <>
                <ItemFooter data={data}></ItemFooter>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FooterTop;

function ItemFooter({ data }) {
  const { title, items } = data;
  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="mb-2 text-xl font-bold text-white uppercase">{title}</h2>
        <div>
          {items.map((item) => {
            return (
              <>
                <span className="flex items-center gap-1 mb-2">
                  <img
                    style={{ width: "7px", height: "10px" }}
                    src="./icons/arrow-menu-footer.svg"
                    alt=""
                  />
                  <a className="text-white" href="#">{item}</a>
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
