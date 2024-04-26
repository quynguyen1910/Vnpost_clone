import ReactSlick from "./ReactSlick";

const Slider = () => {
  let setting = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  };

  const dataSlider = [
    { thumbnail: "./images/slider1.png" },
    { thumbnail: "./images/slider2.png" },
    { thumbnail: "./images/slider3.png" },
    { thumbnail: "./images/slider4.png" },
  ];
  return (
    <div className="relative mt-20 text-center">
      <ReactSlick seting={setting}>
        {dataSlider.map((item) => {
          return (
            <>
              <div className="w-full">
                <img className="ct-image" src={item.thumbnail} alt="" />
              </div>
            </>
          );
        })}
      </ReactSlick>
    </div>
  );
};

export default Slider;
