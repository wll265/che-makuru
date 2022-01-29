import React from "react";
import { Zoom } from "react-reveal";

const ContactSection = () => (
  <section
    id="contact"
    style={{
      color: "rgb(223,233,244)",
      background: "var(--bs-red)"
    }}
  >
    <Zoom bottom>

   
    <div className="container">
      <div className="row">
        <div className="col-lg-8 text-center mx-auto">
          <h2
            className="section-heading"
            style={{
              fontSize: "30px",
              fontFamily: "Kaushan Script"
            }}
          >
            <i
              className="fa fa-send-o"
              style={{
                marginRight: "10px"
              }}
            />
            Let's Get In Touch!
          </h2>
          <hr className="my-4" />
          <p className="mb-5">
            Ready to start your next project with us? That's great! Give us a
            call or send us an email and we will get back to you as soon as
            possible!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 text-center ms-auto">
          <i
            className="fa fa-phone fa-3x mb-3 sr-contact"
            data-aos="zoom-in"
            data-aos-duration={300}
            data-aos-once="true"
          />
          <p>+265999561426</p>
        </div>
        <div className="col-lg-4 text-center me-auto">
          <i
            className="fa fa-envelope-o fa-3x mb-3 sr-contact"
            data-aos="zoom-in"
            data-aos-duration={300}
            data-aos-delay={400}
            data-aos-once="true"
          />
          <p>
            <a
              href="mailto:your-email@your-domain.com"
              style={{
                color: "var(--bs-white)"
              }}
            >
              info@chemakuru.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </Zoom>
  </section>
);

export default ContactSection;
