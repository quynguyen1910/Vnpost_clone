import React from "react";
import Slider from "react-slick";

export default function ReactSlick({seting, children }) {
  var settings = {
   ...seting
  };
  return <Slider {...settings}>{children}</Slider>;
}
