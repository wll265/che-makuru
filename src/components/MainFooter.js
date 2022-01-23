import React from "react";

const MainFooter = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">Copyright © Che Makuru 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="https://web.facebook.com/Mahala-Wipha-Rhythm-2248108098741494">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          {/* <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  </footer>
);

export default MainFooter;
