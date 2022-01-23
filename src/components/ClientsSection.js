import React from "react";
import ClientsSectionItem from "./ClientsSectionItem";

const ClientsSection = () => (
  <section
    className="py-5"
    style={{
      marginTop: "0px",
      paddingTop: "0px"
    }}
  >
    <h1
      style={{
        fontSize: "30px",
        textAlign: "center",
        fontFamily: "Kaushan Script",
        paddingTop: "0px",
        paddingBottom: "15px"
      }}
    >
      <i
        className="fa fa-check-square-o"
        style={{
          marginRight: "10px"
        }}
      />
      trusted by
    </h1>
    <div className="container">
      <div className="row">
        <ClientsSectionItem></ClientsSectionItem>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/designmodo.jpg"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/envato.jpg"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="#">
            <img
              className="img-fluid d-block mx-auto"
              src="assets/img/clients/themeforest.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ClientsSection;
