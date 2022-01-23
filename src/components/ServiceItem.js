import React from "react";
import ServiceTitle from "./ServiceTitle";
import ServiceDescription from "./ServiceDescription";

const ServiceItem = () => (
  <div className="col-md-4">
    <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary" />
      <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
    </span>
    <ServiceTitle></ServiceTitle>
    <ServiceDescription></ServiceDescription>
  </div>
);

export default ServiceItem;
