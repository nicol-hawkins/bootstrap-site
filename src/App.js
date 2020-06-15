import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

  
  return (
    <div className="App">
      	{/* <!-- START: Preloader --> */}
	{/* <div id="preloader" class="preloader">
		<div class="spinner-grow text-dark" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div> */}
	{/* <!-- END: Preloader --> */}

	{/* <!-- START: Theme Switcher --> */}

	<div className="switcher">
		<a href="#" data-theme="light" >deed</a>
	</div>

	{/* <!-- END: Theme Switcher --> */}

	<aside className="aside">
		{/* <!-- START: NAVBAR --> */}

		<div className="nav-wrapper">

			<div className="navbar-toggler">
				<svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="60">
				  <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
				  <path className="line middle" d="m 30,50 h 40" />
				  <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
				</svg>
			</div>

			<nav className="navbar text-center align-items-center justify-content-center">

                <div className="collapse navbar-collapse show" id="navbarCollapse">
                	<div className="about-avatar mb-4">
						<img src="./images/headshot.jpg" style={{width: 20 + "vw", height: 20 + 'vh'}} alt="" className="img-fluid mx-auto d-block shadow-sm rounded-full"/>
					</div>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Portfolio</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>

               	<div className="aside-footer">
                	<ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>
	        </nav>
        </div>
        {/* <!-- END: NAVBAR --> */}
    </aside>

    <div className="page-wrapper">

		{/* <!-- START: HOME -->		 */}
    	<section className="section-home " id="home">
    		<div className="glass">Nicol Hawkins</div>
    		<img src="./images/galaxy.jpg" />
    		{/* <!-- particles.js container -->  */}
    		{/* <div id="particles-js"></div> */}
    	</section>	
    	{/* <!-- END: HOME --> */}

		{/* <!-- START: ABOUT --> */}
		<section className="section section-about" id="about">
			<div className="container">
				<div className="section-head">
					<span>Get to know</span>
					<h2>About Me</h2>
				</div>

				<div className="row justify-content-center align-items-center">
					<div className="col-md-5">
						<img className="img-fluid img-thumbnail wow fadeInUp" data-wow-duration="1s" src="assets/images/avatar.jpg" alt="About Picture"/>
					</div>
					<div className="col-md-7">
						<div className="about-desc wow fadeInUp" data-wow-duration="1s"  data-wow-delay="500ms">
							<div className="about-desc-content">
								<h1 className="font-weight-light">I'm Alice Joseph</h1>
								<p className="mt-3 font-weight-light">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
							</div>

							<div className="about-desc-more text-left b-box mt-3">
								<div className="row">
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>From :</b>
											<span>Miami, FL</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>Age :</b>
											<span>19</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>Phone :</b>
											<a href="tel:0987654321">098-765-4321</a>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>Email :</b>
											<a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
										</div>
									</div>
									
								</div>
							</div>

							<ul className="about-social mb-0 list-inline mt-4">
								<li className="list-inline-item">
									<a href="#" className="btn downloadCV hover-state">
										<i className="fas fa-download"></i>
										<span>Download CV</span>
									</a>
								</li>
							</ul> 
						</div>
					</div>

				</div>
			</div>
		</section>
		{/* <!-- END: ABOUT -->

		<!-- START: SERVICES --> */}
		<section className="section section-dark section-services" id="services">
			<div className="container">
				<div className="section-head">
					<span>WHAT I DO</span>
					<h2>My Services</h2>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div className="services-list-icon">
								<i className="fas fa-paint-brush  "></i> 
								<span>01</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Graphic Design</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div className="services-list-icon">
								<i className="fas fa-palette  "></i>
								<span>02</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Web Development</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div className="services-list-icon">
								<i className="fas fa-compact-disc  "></i> 
								<span>03</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Media Marketing</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
							<div className="services-list-icon">
								<i className="fa fa-puzzle-piece  " aria-hidden="true"></i> <span>04</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Advetising</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
							<div className="services-list-icon">
								<i className="fa fa-gamepad  " aria-hidden="true"></i> 
								<span>05</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Game Development</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
							<div className="services-list-icon">
								<i className="far fa-chart-bar  "></i> 
								<span>06</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Analytics</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: SERVICES -->

		<!-- START: RESUME --> */}
		<section className="section section-resume" id="resume">
			<div className="container">
				<div className="section-head">
					<span>My Resume</span>
					<h2>My Expertises</h2>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> My Experience</h5>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Senior Architect</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2015 - Present | Google</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div>
								<h5>Front-end Developer</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2013 - 2015 | Facebook Inc.</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div>
								<h5>UI Developer</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2011 - 2013 | Envato.</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> My Education</h5>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Master in Arts</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div>
								<h5>Art University</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div>
								<h5>Art University</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> Design Skills</h5>
						<div className="resume-panel b-box hover-state p-4 mt-3">

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s">
								<h6>Graphic Design </h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 95 + '%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>Logo Design</h6>
								<div className="progress mt-2" style={{height: 7+ 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Logo Design</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 85+ '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-0 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>Photoshop & Figma</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> Coding Skills</h5>
						<div className="resume-list b-box hover-state p-4 mt-3">
							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s">
								<h6>RWD</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>Bootstrap</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Jekyll</h6>
								<div className="progress mt-2" style={{height: 7 + "px"}}>
									<div className="progress-bar" role="progressbar" style={{width: 70 + "%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>Javascript</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 85 +'%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
						
			</div>
		</section>
		{/* <!-- END: RESUME -->

		<!--START: WORK -->    */}
		<section className="section section-dark section-work" id="work">
			<div className="container">
				<div className="section-head text-center">
					<span>Portfolio</span>
					<h2>My Works</h2>
				</div>
			</div>
			<div className="container swiper-container swiper-portfolio wow fadeInUp" data-wow-duration="1.5s">
				<div className=" swiper-wrapper mt-5">
					<div className="portfolio-item swiper-slide " data-groups="all slideshow">
						<a href="assets/images/p1-1.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p1-1.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p2-2.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p2-2.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide slideshow" data-groups="all slideshow">
						<a href="assets/images/p3-3.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p3-3.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide video" data-groups="all video">
						<a href="assets/images/p4-4.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p4-4.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
						<a href="assets/images/p5-5.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p5-5.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p6-6.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p6-6.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide video" data-groups="all video">
						<a href="assets/images/p7-7.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p7-7.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
						<a href="assets/images/p8-8.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p8-8.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p9-9.jpg" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src="assets/images/p9-9.jpg" className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The wall</h3>
									<p className="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

				</div>
				<div className="portfolio-pagination">
					
				</div>
			</div>
		</section>
		{/* <!--END: WORK -->

		<!-- START: TESTIMONY --> */}
		<section className="section section-light section-testimony" id="testimony">
			<div className="container">
				<div className="section-head text-center">
					<span>Kind Words</span>
					<h2>testimonial</h2>
				</div>
				<div className="row mt-4 pt-4">
					<div className="col-lg-12">
						<div className="swiper-container swiper-testimony wow fadeInUp"  data-wow-duration="1.5s">
							<div className="swiper-wrapper">
								<div className="swiper-slide single-testimonials ">
									<div className="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box"/>
										<p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div className="swiper-slide single-testimonials ">
									<div className="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box"/>
										<p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin.  Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
										<span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div className="swiper-slide single-testimonials ">
									<div className="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box"/>
										<p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div className="swiper-slide single-testimonials ">
									<div className="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box"/>
										<p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div className="swiper-slide single-testimonials ">
									<div className="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box"/>
										<p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
										<span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

							</div>
							<div className="swiper-pagination"></div>
						</div>

						<div className="testimony-nav">
							<a href="#" className="swiper-button-next"></a>
							<a href="#" className="swiper-button-prev"></a>
						</div>

					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: TESTIMONY -->

		<!-- START: CTA --> */}
		<section className="section section-freelance section-light text-center ">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-head wow fadeInUp" data-wow-duration="1.5s">
							<h2>Let's work together!</h2>
						</div>
						<div className="mt-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<a href="#" className="btn hover-state">Hire Me!</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: CTA -->

		<!-- START: BLOG --> */}
		<section className="section section-dark section-blog" id="blog">
			<div className="container">   
				<div className="section-head">
					<span>My Personal</span>
					<h2>Blog</h2>
				</div>                 
				<div className="mt-5">
					<div className="swiper-container swiper-blog">
						<div className="swiper-wrapper">
							<a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div className="blog-list--img wow fadeInUp" data-wow-duration="1.5s">
									<img src="assets/images/blog-1.jpg" alt="Blog Image" className="img-fluid"/>
									<div className="blog-list--details d-flex justify-content-center align-items-center">
										<div className="blog-list--details-in">
											<p className="blog-by text-white">Alice Joseph</p>
											<span className="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div className="blog-list--desc p-3">
									<h3>10 tips for drawing with coloured pencils</h3>
									<p className="mt-3 text-center">
										<span className="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div className="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
									<img src="assets/images/blog-2.jpg" alt="Blog Image" className="img-fluid"/>
									<div className="blog-list--details d-flex justify-content-center align-items-center">
										<div className="blog-list--details-in">
											<p className="blog-by text-white">Alice Joseph</p>
											<span className="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div className="blog-list--desc p-3">
									<h3>The single greatest gift to get your friend who always travels</h3>
									<p className="mt-3 text-center">
										<span className="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div className="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
									<img src="assets/images/blog-3.jpg" alt="Blog Image" className="img-fluid"/>
									<div className="blog-list--details d-flex justify-content-center align-items-center">
										<div className="blog-list--details-in">
											<p className="blog-by text-white">Alice Joseph</p>
											<span className="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div className="blog-list--desc p-3">
									<h3>Why all women should eat alone </h3>
									<p className="mt-3 text-center">
										<span className="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div className="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
									<img src="assets/images/blog-1.jpg" alt="Blog Image" className="img-fluid"/>
									<div className="blog-list--details d-flex justify-content-center align-items-center">
										<div className="blog-list--details-in">
											<p className="blog-by text-white">Alice Joseph</p>
											<span className="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div className="blog-list--desc p-3">
									<h3>Drawing with coloured pencils</h3>
									<p className="mt-3 text-center">
										<span className="blog-cat">Travel</span>
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: BLOG -->

		<!-- START: CONTACT --> */}
		<section className="section section-light section-contact" id="contact">
			<div className="container">
				<div className="section-head">
					<span>say Hello</span>
					<h2>Contact </h2>
				</div>

				<div className="contact-map mt-5">
					<h5 className="section-subHead mb-4"> My Location</h5>
					<div className="contact-map--container b-box wow fadeInUp" id="map" data-wow-duration="1.5s"></div>
				</div>
			</div>

			<div className="contact-Otherdetails section-dark">
				<div className="container">
					<div className="contact-details mt-5">
						<h5 className="section-subHead pt-5 mb-4"> Get in Touch</h5>
						<div className="row">
							<div className="col-sm-6 col-lg-6">
								<div className="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s">
									<div className="mb-3">
										<i className="fas fa-mobile-alt  "></i>
									</div>
									<div className="mt-2">
										<a href="tel:9876543210" className="">+987 654 3210</a>
										<p className="mt-2">Call Us</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-6">
								<div className="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
									<div className="mb-3">
										<i className="fas fa-envelope  "></i>
									</div>
									<div className="mt-2">
										<a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
										<p className="mt-2">Email Us</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="contact-form mt-5">
						<form>
							<h5 className="section-subHead mb-2"> Contact Form</h5>
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s">
										<input name="name" id="name" type="text" className="form-control b-box" placeholder="Your Name*" required/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
										<input name="email" id="email" type="email" className="form-control b-box" placeholder="Your Email*" required/>
									</div>
								</div>                                
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
										<input type="text" className="form-control b-box" id="subject" placeholder="Your Subject.." required/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
										<textarea name="comments" id="comments" rows="4" className="form-control b-box" placeholder="Your message..."></textarea>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 text-center mt-4 mb-5  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
									<a href="#" className="btn hover-state">Submit</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: CONTACT -->

		<!--START: FOOTER--> */}
		<footer className="footer section section-light">
			<div className="container">
				<p className="copyright text-center mb-0">&copy; Bumblebee 2019 | All Right Reserved</p>
			</div>
		</footer>
		{/* <!--END: FOOTER--> */}
	</div>

    </div>
  );
}
}

export default App;
