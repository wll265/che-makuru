import React from "react";
import CarouselIndicatorsItem from "./CarouselIndicatorsItem";

const CarouselIndicators = () => (
  <ol className="carousel-indicators">
    <CarouselIndicatorsItem />
    <li data-bs-target="#w_shop_105" data-bs-slide-to={1} />
    <li data-bs-target="#w_shop_105" data-bs-slide-to={2} />
    <li data-bs-target="#w_shop_105" data-bs-slide-to={3} />
  </ol>
);

export default CarouselIndicators;
