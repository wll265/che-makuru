const extractReactComponents = require("html-to-react-components");
 
extractReactComponents(
  `<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <title>Home - Che Makuru</title>
      <meta name="description" content="che makuru event masters official website">
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kaushan+Script">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700">
      <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
      <link rel="stylesheet" href="assets/css/Animated-Pretty-Product-List-v12.css">
      <link rel="stylesheet" href="assets/css/featured-products-slider-1.css">
      <link rel="stylesheet" href="assets/css/featured-products-slider.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
      <link rel="stylesheet" href="assets/css/untitled.css">
  </head>
  
  <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="54">
      <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
          <div class="container"><a class="navbar-brand" href="#page-top" style="font-family: 'Kaushan Script', cursive;">Che Makuru</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto text-uppercase">
                      <li class="nav-item"><a class="nav-link" href="#services"><i class="fa fa-briefcase" style="font-size: 16px;margin-right: 10px;"></i>Services</a></li>
                      <li class="nav-item"><a class="nav-link" href="#portfolio"><i class="fa fa-photo" style="margin-right: 10px;font-size: 16px;"></i>Portfolio</a></li>
                      <li class="nav-item"><a class="nav-link" href="#about"><i class="fa fa-info-circle" style="margin-right: 10px;font-size: 16px;"></i>About</a></li>
                      <li class="nav-item"></li>
                      <li class="nav-item"><a class="nav-link" href="#contact"><i class="fa fa-phone" style="font-size: 16px;margin-right: 10px;"></i>Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      <header class="masthead" style="background-image:url('assets/img/header-bg.jpg');">
          <div class="container">
              <div class="intro-text" style="opacity: 1;filter: blur(0px);padding-right: 60px;padding-left: 60px;">
                  <h1 class="text-capitalize" style="font-size: 45.5px;font-family: 'Kaushan Script', cursive;">welcome to che makuru event masters</h1><span style="font-size: 26px;text-align: center;text-transform: capitalize;font-family: 'Roboto Slab', serif;">TURNING IDEAS INTO ACTION</span>
                  <div class="intro-heading text-uppercase"><span></span></div><a class="btn btn-primary btn-xl text-uppercase" role="button" href="#services" style="font-size: 12px;width: 140.7px;height: 51.2px;padding: 16px 18px;border-radius: 48px;font-family: 'Kaushan Script', cursive;">LEARN MORE</a>
              </div>
          </div>
      </header>
      <section id="about" style="padding: 0px 28px;">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2 class="text-uppercase" style="padding: 20px;font-family: 'Kaushan Script', cursive;font-size: 30px;"><i class="fa fa-info-circle" style="margin-right: 10px;"></i>About</h2>
                      <h3 class="text-muted section-subheading" style="font-size: 23px;margin-bottom: 0px;"><br>Dear prospective client, che makuru event masters is a registered business and also registered with mra. we provide end to end sound/equipment , tents, chairs, tables, jumping castles and trampolines that assist companies and individuals meet their objectives by giving the best possible affordable rates<br><br></h3>
                  </div>
              </div>
          </div>
      </section>
      <section id="services" style="padding: 0px 8px;">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2 class="text-uppercase section-heading" style="font-size: 30px;font-family: 'Kaushan Script', cursive;"><i class="fa fa-briefcase" style="margin-right: 10px;"></i>Services</h2>
                      <h3 class="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur</h3>
                  </div>
              </div>
              <div class="row text-center">
                  <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                      <h4 class="section-heading">E-Commerce</h4>
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
                      <h4 class="section-heading">Responsive Design</h4>
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div class="col-md-4"><span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                      <h4 class="section-heading">Web Security</h4>
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
              </div>
          </div>
      </section>
      <section class="bg-light" id="portfolio" style="padding: 40px 0px;margin-top: 0px;">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2 class="text-uppercase section-heading" style="font-size: 30px;color: var(--bs-dark);font-family: 'Kaushan Script', cursive;"><i class="fa fa-photo" style="margin-right: 10px;"></i>Portfolio</h2>
                      <h3 class="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal1" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/1-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Threads</h4>
                          <p class="text-muted">Illustration</p>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal2" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/2-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Explore</h4>
                          <p class="text-muted">Graphic Design</p>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal3" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/3-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Finish</h4>
                          <p class="text-muted">Identity</p>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal4" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/4-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Lines</h4>
                          <p class="text-muted">Branding</p>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal5" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/5-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Southwest</h4>
                          <p class="text-muted">Website Design</p>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4 portfolio-item"><a class="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                          <div class="portfolio-hover">
                              <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div>
                          </div><img class="img-fluid" src="assets/img/portfolio/6-thumbnail.jpg">
                      </a>
                      <div class="portfolio-caption">
                          <h4>Window</h4>
                          <p class="text-muted">Photography</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section style="padding: 151px 2px;padding-top: 0px;padding-bottom: 0px;">
          <div id="w_shop_105" class="carousel slide w_shop_105_indicators w_shop_105_control_button thumb_scroll_x swipe_x ps_easeOutInCubic" data-duration="2000" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="8000" style="padding-top: 28px;padding-bottom: 63px;">
              <div class="w_shop_105_main_header">
                  <h1 style="font-size: 30px;font-family: 'Kaushan Script', cursive;"><span><i class="fa fa-gift" style="margin-right: 10px;"></i><strong>featured</strong></span><span><strong>products</strong></span></h1>
              </div>
              <ol class="carousel-indicators">
                  <li class="active" style="filter: blur(0px);" data-bs-target="#w_shop_105" data-bs-slide-to="0"></li>
                  <li data-bs-target="#w_shop_105" data-bs-slide-to="1"></li>
                  <li data-bs-target="#w_shop_105" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active"><img src="assets/img/w_shop_105_01.png" alt="w_shop_105_01">
                      <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style="font-family: roboto;">$535.00</span>
                          <h1 class="left-h" data-animation="animated fadeInLeft">product name and modal number</h1>
                          <p data-animation="animated fadeInLeft">Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus massa.</p><a href="#" data-animation="animated fadeInLeft">order now</a>
                      </div>
                      <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                          <ul>
                              <li data-animation="animated fadeInRight">some features</li>
                              <li data-animation="animated fadeInRight">some other features</li>
                              <li data-animation="animated fadeInRight">some more features</li>
                              <li data-animation="animated fadeInRight">other features</li>
                              <li data-animation="animated fadeInRight">features and features</li>
                          </ul>
                      </div>
                  </div>
                  <div class="carousel-item"><img src="assets/img/w_shop_105_02.png" alt="w_shop_105_02">
                      <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style="font-family: roboto;">$535.00</span>
                          <h1 class="left-h" data-animation="animated fadeInLeft">product name and modal number</h1>
                          <p data-animation="animated fadeInLeft">Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus massa.</p><a href="#" data-animation="animated fadeInLeft">order now</a>
                      </div>
                      <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                          <ul>
                              <li data-animation="animated fadeInRight">some features</li>
                              <li data-animation="animated fadeInRight">some other features</li>
                              <li data-animation="animated fadeInRight">some more features</li>
                              <li data-animation="animated fadeInRight">other features</li>
                              <li data-animation="animated fadeInRight">features and features</li>
                          </ul>
                      </div>
                  </div>
                  <div class="carousel-item"><img src="assets/img/w_shop_105_03.png" alt="w_shop_105_03">
                      <div class="w_shop_105_left_box"><span data-animation="animated fadeInLeft" style="font-family: roboto;">$535.00</span>
                          <h1 class="left-h" data-animation="animated fadeInLeft">product name and modal number</h1>
                          <p data-animation="animated fadeInLeft">Lorem ipsum dolor sit amet onsectetuer adipiscing elit unc varius facilisis eros in velit quis arcu ornare laoreet urabitur adipiscing luctus massa.</p><a href="#" data-animation="animated fadeInLeft">order now</a>
                      </div>
                      <div class="w_shop_105_right_box" data-animation="animated fadeInRight">
                          <ul>
                              <li data-animation="animated fadeInRight">some features</li>
                              <li data-animation="animated fadeInRight">some other features</li>
                              <li data-animation="animated fadeInRight">some more features</li>
                              <li data-animation="animated fadeInRight">other features</li>
                              <li data-animation="animated fadeInRight">features and features</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="contact" style="color: rgb(223,233,244);background: var(--bs-red);">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 text-center mx-auto">
                      <h2 class="section-heading" style="font-size: 30px;font-family: 'Kaushan Script', cursive;"><i class="fa fa-send-o" style="margin-right: 10px;"></i>Let's Get In Touch!</h2>
                      <hr class="my-4">
                      <p class="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 text-center ms-auto"><i class="fa fa-phone fa-3x mb-3 sr-contact" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true"></i>
                      <p>123-456-6789</p>
                  </div>
                  <div class="col-lg-4 text-center me-auto"><i class="fa fa-envelope-o fa-3x mb-3 sr-contact" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300" data-aos-once="true"></i>
                      <p><a href="mailto:your-email@your-domain.com" style="color: var(--bs-white);">email@example.com</a></p>
                  </div>
              </div>
          </div>
      </section>
      <section class="py-5" style="margin-top: 0px;padding-top: 0px;">
          <h1 style="font-size: 30px;text-align: center;font-family: 'Kaushan Script', cursive;padding-top: 0px;padding-bottom: 15px;"><i class="fa fa-check-square-o" style="margin-right: 10px;"></i>trusted by</h1>
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/clients/creative-market.jpg"></a></div>
                  <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/clients/designmodo.jpg"></a></div>
                  <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/clients/envato.jpg"></a></div>
                  <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid d-block mx-auto" src="assets/img/clients/themeforest.jpg"></a></div>
              </div>
          </div>
      </section>
      <section id="contact" style="background-image:url('assets/img/map-image.png');">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2 class="text-uppercase section-heading" style="font-size: 30px;font-family: 'Kaushan Script', cursive;"><i class="fa fa-envelope-o" style="margin-right: 10px;"></i>Contact Us</h2>
                      <h3 class="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-12">
                      <form id="contactForm" name="contactForm" novalidate="novalidate">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group mb-3"><input class="form-control" type="text" id="name" placeholder="Your Name *" required=""><small class="form-text text-danger flex-grow-1 help-block lead"></small></div>
                                  <div class="form-group mb-3"><input class="form-control" type="email" id="email" placeholder="Your Email *" required=""><small class="form-text text-danger help-block lead"></small></div>
                                  <div class="form-group mb-3"><input class="form-control" type="tel" placeholder="Your Phone *" required=""><small class="form-text text-danger help-block lead"></small></div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group mb-3"><textarea class="form-control" id="message" placeholder="Your Message *" required=""></textarea><small class="form-text text-danger help-block lead"></small></div>
                              </div>
                              <div class="w-100"></div>
                              <div class="col-lg-12 text-center">
                                  <div id="success"></div><button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" style="padding: 11px 21px;border-radius: 34px;font-family: 'Kaushan Script', cursive;">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
      <footer>
          <div class="container">
              <div class="row">
                  <div class="col-md-4"><span class="copyright">Copyright&nbsp;© Che Makuru 2021</span></div>
                  <div class="col-md-4">
                      <ul class="list-inline social-buttons">
                          <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <ul class="list-inline quicklinks">
                          <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                          <li class="list-inline-item"><a href="#">Terms of Use</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal1">
          <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal2">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/2-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal3">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/3-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal4">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/4-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal5">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/5-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal6">
          <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 mx-auto">
                              <div class="modal-body">
                                  <h2 class="text-uppercase">Project Name</h2>
                                  <p class="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img class="img-fluid d-block mx-auto" src="assets/img/portfolio/6-full.jpg">
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul class="list-unstyled">
                                      <li>Date: January 2017</li>
                                      <li>Client: Threads</li>
                                      <li>Category: Illustration</li>
                                  </ul><button class="btn btn-primary" type="button" data-bs-dismiss="modal"><i class="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/bs-init.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      <script src="assets/js/agency.js"></script>
      <script src="assets/js/Animated-Pretty-Product-List-v12.js"></script>
      <script src="assets/js/featured-products-slider.js"></script>
  </body>
  
  </html>
`,
  {
    componentType: "stateless",
    moduleType: false
  }
);
 
/*
{ Header: 'const Header = () => <header className="header">\n\n    <Heading></Heading>\n\n    <Nav></Nav>\n\n  </header>;',
  Heading: 'const Heading = () => <h1 className="heading">Hello, world!</h1>;',
  Nav: 'const Nav = () => <nav className="nav">\n      <ul className="list">\n        <ListItem></ListItem>\n        <ListItem></ListItem>\n      </ul>\n    </nav>;',
  ListItem: 'const ListItem = () => <li className="list-item">#2</li>;' }
*/