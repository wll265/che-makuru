import React from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselInner from "./CarouselInner";

const ProductsCarouselSection = () => (
  <section
    style={{
      padding: "151px 2px",
      paddingTop: "0px",
      paddingBottom: "0px"
    }}
  >
    <div
      id="w_shop_105"
      className="carousel slide w_shop_105_indicators w_shop_105_control_button thumb_scroll_x swipe_x ps_easeOutInCubic"
      data-duration={2000}
      data-bs-ride="carousel"
      data-bs-pause="hover"
      data-bs-interval={8000}
      style={{
        paddingTop: "28px",
        paddingBottom: "63px"
      }}
    >
      <div className="w_shop_105_main_header">
        <h1
          style={{
            fontSize: "30px",
            fontFamily: "Kaushan Script"
          }}
        >
          <span>
            <i
              className="fa fa-gift"
              style={{
                marginRight: "10px"
              }}
            />
            <strong>featured</strong>
          </span>
          <span>
            <strong>products</strong>
          </span>
        </h1>
      </div>
      <CarouselIndicators></CarouselIndicators>
      <CarouselInner></CarouselInner>
    </div>
  </section>
);

export default ProductsCarouselSection;
