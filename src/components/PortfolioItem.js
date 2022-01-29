import React from "react";
import { Zoom } from "react-reveal";

const PortfolioItem = (props) => (
  <div className="col-sm-6 col-md-4 portfolio-item">
    <a
      className="portfolio-link"
     
    >
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
       
        </div>
      </div>
      <Zoom>
      <img className="img-fluid" height="300px" src={props.src} />

      </Zoom>
     
    </a>
    {/* <div className="portfolio-caption">
      <h4>Threads</h4>
      <p className="text-muted">Illustration</p>
    </div> */}
  </div>
);

export default PortfolioItem;
