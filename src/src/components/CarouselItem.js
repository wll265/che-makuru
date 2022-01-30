import React from "react";
import CarouselProductName from "./CarouselProductName";
import CarouselProductDescription from "./CarouselProductDescription";
import CarouselProductFeatures from "./CarouselProductFeatures";

const CarouselItem = () => (
  <div className="carousel-item active">
    <img src="assets/img/w_shop_105_01.png" alt="w_shop_105_01" />
    <div className="w_shop_105_left_box">
      <span
        data-animation="animated fadeInLeft"
        style={{
          fontFamily: "roboto"
        }}
      >
        $535.00
      </span>
      <CarouselProductName></CarouselProductName>
      <CarouselProductDescription></CarouselProductDescription>
      <a href="#" data-animation="animated fadeInLeft">
        order now
      </a>
    </div>
    <CarouselProductFeatures></CarouselProductFeatures>
  </div>
);

export default CarouselItem;
