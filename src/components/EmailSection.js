import React from "react";

const EmailSection = () => (
  <section
    id="email"
    style={{
      backgroundImage: 'url("assets/img/map-image.png")'
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
              className="fa fa-envelope-o"
              style={{
                marginRight: "10px"
              }}
            />
            Contact Us
          </h2>
          <h3 className="text-muted section-subheading">
            send a message
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="contactForm" noValidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Your Name *"
                    required
                  />
                  <small className="form-text text-danger flex-grow-1 help-block lead" />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Your Email *"
                    required
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Your Phone *"
                    required
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required
                    defaultValue={""}
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-lg-12 text-center">
                <div id="success" />
                <a
                
                  className="btn btn-primary btn-xl text-uppercase"
                  id="sendMessageButton"
                  href="#contact"
                  type="submit"
                  style={{
                    padding: "11px 21px",
                    borderRadius: "34px",
                    fontFamily: "Kaushan Script"
                  }}
                >
                  Send Message
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default EmailSection;
