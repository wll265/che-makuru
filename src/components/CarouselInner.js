import React from "react";
import CarouselItem from "./CarouselItem";


const CarouselInner = () => (
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img
        src="assets/img/mw-minbus.jpg"
        className="img-fluid img-thumbnail"
        alt="w_shop_105_02"
      />
      <div className="w_shop_105_left_box">
        <span
          className="animate__animated animate__fadeInLeft"
          style={{
            fontFamily: "roboto",
          }}
        >
          <del>MK52,000.00</del>{" "}
          <span style={{ paddingLeft: "6px" }}>MK45760.00</span>
        </span>
        <h1 className="left-h animate__animated animate__fadeInLeft">
          MOUNTED PA SYSTEM
        </h1>
        <p className="animate__animated animate__fadeInLeft">
          A prestigious event demands a quality sound system to reach a wider
          audience. che makuru offers high quality Sound System to meet your
          needs
        </p>
        <a href="#contact" className="animate__animated animate__">
          order now
        </a>
      </div>
      <div className="w_shop_105_right_box animate__animated animate__fadeInRight">
        <ul>
          <li className="animated fadeInRight">HQ Sound</li>
          <li className="animated fadeInRight">well balanced</li>
          <li className="animated fadeInRight">portable power backup</li>
          <li className="animated fadeInRight">Noise canceling</li>
        </ul>
      </div>
    </div>
    <div className="carousel-item">
      <img
        src="assets/img/mw-jumping-castle.jpg"
        className="img-fluid img-thumbnail"
        alt="w_shop_105_02"
      />
      <div className="w_shop_105_left_box">
        <span
          className="animated fadeInLeft"
          style={{
            fontFamily: "roboto",
          }}
        >
          <del>MK65,000.00</del>{" "}
          <span style={{ paddingLeft: "6px" }}>MK50,000.00</span>
        </span>
        <h1 className="left-h animated fadeInLeft">
          KIDS COMBO
        </h1>
        <p className="animated fadeInLeft">
          we offer kids entertainment items such as jumping castles for outdoor
          party events
        </p>
        <a href="#contact" className="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box animated fadeInRight"
      >
        <ul>
          <li className="animated fadeInRight">user friendly</li>
          <li className="animated fadeInRight">enhanced safety</li>
          <li className="animated fadeInRight">flexible</li>
          <li className="animated fadeInRight">interactive</li>
        </ul>
      </div>
    </div>
    <div className="carousel-item">
      <img
        src="assets/img/mw.jpg"
        className="img-fluid img-thumbnail"
        alt="w_shop_105_03"
      />
      <div className="w_shop_105_left_box">
        <span
          className="animated fadeInLeft"
          style={{
            fontFamily: "roboto",
          }}
        >
          <del>MK12,000.00</del>{" "}
          <span style={{ paddingLeft: "6px" }}>MK8400.00</span>
        </span>
        <h1 className="left-h animated fadeInLeft">
          DISCO LIGHTS
        </h1>
        <p className="animated fadeInLeft">
          make your cerebrations more vibrant with our featured disco lights
        </p>
        <a href="#contact" className="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box animated fadeInRight"
      >
        <ul>
          <li className="animated fadeInRight">modern LED System</li>
          <li className="animated fadeInRight">eye friendly</li>
          <li className="animated fadeInRight">configurable</li>
        </ul>
      </div>
    </div>

    <div className="carousel-item">
      <img
        src="assets/img/mw-tents-alt.jpg"
        className="img-fluid img-thumbnail"
        alt="w_shop_105_02"
      />
      <div className="w_shop_105_left_box">
        <span
          className="animated fadeInLeft"
          style={{
            fontFamily: "roboto",
          }}
        >
          <del>MK70,000.00</del>{" "}
          <span style={{ paddingLeft: "6px" }}>MK52,500.00</span>
        </span>
        <h1 className="left-h animated fadeInLeft">
          TENTS
        </h1>
        <p className="animated fadeInLeft">
          trusted and trusted tents for various outdoor activities
        </p>
        <a href="#contact" className="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box animated fadeInRight"
      >
        <ul>
          <li className="animated fadeInRight">convenient</li>
          <li className="animated fadeInRight">various sizes</li>
          <li className="animated fadeInRight">general purpose</li>
        </ul>
      </div>
    </div>
  </div>
);

export default CarouselInner;
