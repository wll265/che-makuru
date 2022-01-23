import React from "react";

const AboutSection = () => (
  <section
    id="about"
    style={{
      padding: "0px 28px",
      paddingTop: "150px"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2
            className="text-uppercase"
            style={{
              padding: "20px",
              fontFamily: "Kaushan Script",
              fontSize: "30px"
            }}
          >
            <i
              className="fa fa-info-circle"
              style={{
                marginRight: "10px"
              }}
            />
            About
          </h2>
          <h3
            className="text-muted section-subheading"
            style={{
              fontSize: "23px",
              marginBottom: "0px"
            }}
          >
            <br />
            {/* Dear prospective client, che makuru event masters is a registered
            business and also registered with mra. we provide end to end
            sound/equipment , tents, chairs, tables, jumping castles and
            trampolines that assist companies and individuals meet their
            objectives by giving the best possible affordable rates */}
            Since 2010 we’ve been influential in covering almost all events that need sound equipment from small to mid-high-size venues. weddings, bridal showers, in theatres, houses of worship, convention centers, clubs, live theatres, and almost anywhere else that people gather to enjoy music or hear the spoken word, are within our ability and we respond with acoustical perfection. We have a quality sound system(s) combined in modularization, which is suitable for any performance venue. Further to that, we are dedicated to turning our clients' ideas into action. Through a combination of tentage work, provision of chairs, tables, Jumping castles, and decorations, we have the knowledge and experience to get brands noticed. We’ve worked extensively and successfully with both new and established businesses. Are you ready to take your business to the next level?
            <br />
            <br />
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
