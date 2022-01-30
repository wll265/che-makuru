import Brand from "./Brand";

export default function LightNavBar() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
                  <Brand/>
                {/* <a href="index.html">
                  <img
                    style={{
                      marginRight: "10px",
                    }}
                    src="/logo.png"
                    height="30px"
                    alt="w_shop_105_03"
                  />
                  Chemakuru<span className="text-primary">.</span>{" "}
                </a> */}
              </h1>
            </div>

            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  {/* <li><a href="#home-section" className="nav-link">Home</a></li>
                <li><a href="#blog-section" className="nav-link">Blog</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li> */}

                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      <i
                        className="fa fa-info-circle"
                        style={{
                          marginRight: "10px",
                          fontSize: "16px",
                        }}
                      />
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      <i
                        className="fa fa-briefcase"
                        style={{
                          fontSize: "16px",
                          marginRight: "10px",
                        }}
                      />
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#products">
                      <i
                        className="fa fa-tag"
                        style={{
                          fontSize: "16px",
                          marginRight: "10px",
                        }}
                      />
                      Products
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      <i
                        className="fa fa-photo"
                        style={{
                          marginRight: "10px",
                          fontSize: "16px",
                        }}
                      />
                      Portfolio
                    </a>
                  </li>

                  <li className="nav-item" />
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      <i
                        className="fa fa-phone"
                        style={{
                          fontSize: "16px",
                          marginRight: "10px",
                        }}
                      />
                      Contact
                    </a>
                  </li>

                  <li className="social social-icon">
                    <a
                      href="https://web.facebook.com/Mahala-Wipha-Rhythm-2248108098741494"
                      className="nav-link"
                    >
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="social social-icon">
                    <a href="#contact" className="nav-link">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="social social-icon">
                    <a href="#contact" className="nav-link">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3">
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle float-right"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
