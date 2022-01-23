import React from "react";
import CarouselItem from "./CarouselItem";

const CarouselInner = () => (
  <div className="carousel-inner" role="listbox">
   
    <div className="carousel-item active">
      <img src="assets/img/mw-minbus.jpg" className="img-fluid img-thumbnail" alt="w_shop_105_02" />
      <div className="w_shop_105_left_box">
        <span
          data-animation="animated fadeInLeft"
          style={{
            fontFamily: "roboto"
          }}
        >
          <del>MK52,000.00</del> <span  style={{paddingLeft:"6px"}}>MK45760.00</span>
        </span>
        <h1 className="left-h" data-animation="animated fadeInLeft">
          MOUNTED PA SYSTEM
        </h1>
        <p data-animation="animated fadeInLeft">
        A prestigious event demands a quality sound system to reach a wider audience. che makuru offers high quality Sound System to meet your needs
        </p>
        <a href="#" data-animation="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box"
        data-animation="animated fadeInRight"
      >
        <ul>
          <li data-animation="animated fadeInRight">HQ Sound</li>
          <li data-animation="animated fadeInRight">well balanced</li>
          <li data-animation="animated fadeInRight">portable power backup</li>
          <li data-animation="animated fadeInRight">Noise canceling</li>
          
        </ul>
      </div>
    </div>
    <div className="carousel-item">
      <img src="assets/img/mw-jumping-castle.jpg" className="img-fluid img-thumbnail" alt="w_shop_105_02" />
      <div className="w_shop_105_left_box">
        <span
          data-animation="animated fadeInLeft"
          style={{
            fontFamily: "roboto"
          }}
        >
          <del>MK65,000.00</del> <span  style={{paddingLeft:"6px"}}>MK50,000.00</span>
        </span>
        <h1 className="left-h" data-animation="animated fadeInLeft">
          KIDS COMBO
        </h1>
        <p data-animation="animated fadeInLeft">
          we offer kids entertainment items such as jumping castles for outdoor party events
        </p>
        <a href="#" data-animation="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box"
        data-animation="animated fadeInRight"
      >
        <ul>
          <li data-animation="animated fadeInRight">user friendly</li>
          <li data-animation="animated fadeInRight">enhanced safety</li>
          <li data-animation="animated fadeInRight">flexible</li>
          <li data-animation="animated fadeInRight">interactive</li>
          
        </ul>
      </div>
    </div>
    <div className="carousel-item">
      <img src="assets/img/mw.jpg" className="img-fluid img-thumbnail" alt="w_shop_105_03" />
      <div className="w_shop_105_left_box">
        <span
          data-animation="animated fadeInLeft"
          style={{
            fontFamily: "roboto"
          }}
        >
          <del>MK12,000.00</del> <span  style={{paddingLeft:"6px"}}>MK8400.00</span>
        </span>
        <h1 className="left-h" data-animation="animated fadeInLeft">
          DISCO LIGHTS
        </h1>
        <p data-animation="animated fadeInLeft">
          make your cerebrations more vibrant with our featured disco lights
        </p>
        <a href="#" data-animation="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box"
        data-animation="animated fadeInRight"
      >
        <ul>
          <li data-animation="animated fadeInRight">modern LED System</li>
          <li data-animation="animated fadeInRight">eye friendly</li>
          <li data-animation="animated fadeInRight">configurable</li>
        
        </ul>
      </div>
    </div>

    <div className="carousel-item">
      <img src="assets/img/mw-tents-alt.jpg" className="img-fluid img-thumbnail" alt="w_shop_105_02" />
      <div className="w_shop_105_left_box">
        <span
          data-animation="animated fadeInLeft"
          style={{
            fontFamily: "roboto"
          }}
        >
          <del>MK70,000.00</del> <span  style={{paddingLeft:"6px"}}>MK52,500.00</span>
        </span>
        <h1 className="left-h" data-animation="animated fadeInLeft">
          TENTS
        </h1>
        <p data-animation="animated fadeInLeft">
       trusted and trusted tents for various outdoor activities</p>
        <a href="#" data-animation="animated fadeInLeft">
          order now
        </a>
      </div>
      <div
        className="w_shop_105_right_box"
        data-animation="animated fadeInRight"
      >
        <ul>
          <li data-animation="animated fadeInRight">convenient</li>
          <li data-animation="animated fadeInRight">various sizes</li>
          <li data-animation="animated fadeInRight">general purpose</li>
          
        </ul>
      </div>
    </div>
  </div>
);

export default CarouselInner;
