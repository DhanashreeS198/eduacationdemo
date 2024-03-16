import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <Slider {...settings}>
    <div>
      <img src="images/image1.jpg" alt="Image 1" style={{ height: "auto", maxWidth: "100%" }}/> 
    </div>
    <div>
      <img src="images/image2.jpg" alt="Image 2" style={{ height: "auto", maxWidth: "100%" }}/>
    </div>
    <div>
      <img src="images/image3.jpg" alt="Image 3" style={{ height: "auto", maxWidth: "100%" }} />
    </div>
  </Slider>
  
  );
};

export default MySlider;
