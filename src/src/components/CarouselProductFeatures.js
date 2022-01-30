import React from "react";
import CarouselProductFeaturesItem from "./CarouselProductFeaturesItem";

const CarouselProductFeatures = () => (
  <div className="w_shop_105_right_box" data-animation="animated fadeInRight">
    <ul>
      <CarouselProductFeaturesItem></CarouselProductFeaturesItem>
      <li data-animation="animated fadeInRight">some other features</li>
      <li data-animation="animated fadeInRight">some more features</li>
      <li data-animation="animated fadeInRight">other features</li>
      <li data-animation="animated fadeInRight">features and features</li>
    </ul>
  </div>
);

export default CarouselProductFeatures;
