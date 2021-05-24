import React from 'react';
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const MySlider = React.forwardRef(({options, children}, ref) => {
  const setting = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...options,
  };
  return <Slider ref={ref} className="" {...setting}>{children}</Slider>;
});

export default MySlider;
