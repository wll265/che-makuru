import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = () => (
  <section
    className="bg-light"
    id="portfolio"
    style={{
      padding: "40px 0px",
      paddingTop: "150px",
      marginTop: "0px"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2
            className="text-uppercase section-heading"
            style={{
              fontSize: "30px",
              color: "var(--bs-dark)",
              fontFamily: "Kaushan Script"
            }}
          >
            <i
              className="fa fa-photo"
              style={{
                marginRight: "10px"
              }}
            />
            Portfolio
          </h2>
          <h3 className="text-muted section-subheading">
            a showcase of our recent work.
          </h3>
        </div>
      </div>
      <div className="row">
       
              {
                ["assets/img/mw-ss.jpg",
                "assets/img/mw-imd.jpg",
                "assets/img/mw-minbus.jpg",
                "assets/img/mw-wedding.jpg",
                "assets/img/mw-event.jpg",
                "assets/img/clearday.jpg"].map((item)=>{
                  return(
                    <PortfolioItem key={item} src={item}/>
                  )
                })
              }
      
      
       
        
      </div>
    </div>
  </section>
);

export default PortfolioSection;
