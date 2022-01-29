import React from "react";
import { Zoom } from "react-reveal";
import ServiceItem from "./ServiceItem";

const ServicesSection = () => (
  <section
    id="services"
    style={{
      padding: "0px 8px",
      paddingTop: "150px"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2
            className="text-uppercase section-heading"
            style={{
              fontSize: "30px",
              fontFamily: "Kaushan Script"
            }}
          >
            <i
              className="fa fa-briefcase"
              style={{
                marginRight: "10px"
              }}
            />
            Services
          </h2>
          <h3 className="text-muted section-subheading">
            quality services at affordable price
          </h3>
        </div>
      </div>
      <div className="row text-center">
        {/* <ServiceItem></ServiceItem> */}
        <Zoom bottom>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-calendar fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">Event Planning</h4>
          <Zoom left>
          <p className="text-muted">
          Prior planning prevents poor performance.  We are taking reservations for your next event. For your event's class, courtesy and convenience, make a date with us 
          </p>

          </Zoom>
         
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-music fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">Modified Sound System</h4>
          <Zoom top>
          <p className="text-muted"> To help you easily reach a wider audience,
Mahala Wipha Events Management Team chips in to serve with Digital PA Systems and Sound Systems.
          </p>

          </Zoom>
          
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" />
            <i className="fa fa-tags fa-stack-1x fa-inverse" />
          </span>
          <h4 className="section-heading">Tents And Chairs</h4>
          <Zoom right>
          <p className="text-muted">
         We also Make your event colourful,  auspicious and memorable. Other
Services range from lighting, Marquee tents, chairs, tables etc
          </p>

          </Zoom>
         
        </div>
        </Zoom>
      </div>
    </div>
  </section>
);

export default ServicesSection;
