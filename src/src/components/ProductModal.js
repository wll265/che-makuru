import React from "react";

const ProductModal = () => (
  <div
    className="modal fade text-center portfolio-modal"
    role="dialog"
    tabIndex={-1}
    id="portfolioModal1"
  >
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body">
                <h2 className="text-uppercase">Project Name</h2>
                <p className="text-muted item-intro">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/1-full.jpg"
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-unstyled">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times" />
                  <span> Close Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductModal;
