import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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

	<div class="switcher">
		<a href="#" data-theme="light" >deed</a>
	</div>

	{/* <!-- END: Theme Switcher --> */}

	<aside class="aside">
		{/* <!-- START: NAVBAR --> */}

		<div class="nav-wrapper">

			<div class="navbar-toggler">
				<svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="60">
				  <path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
				  <path class="line middle" d="m 30,50 h 40" />
				  <path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
				</svg>
			</div>

			<nav class="navbar text-center align-items-center justify-content-center">



                <div class="collapse navbar-collapse show" id="navbarCollapse">
                	<div class="about-avatar mb-4">
						<img src="assets/images/about.jpg" alt="" class="img-fluid mx-auto d-block shadow-sm rounded-full"/>
					</div>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">about</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resume">resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work">Portfolio</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>

               	<div class="aside-footer">
                	<ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>
	        </nav>
        </div>
        {/* <!-- END: NAVBAR --> */}
    </aside>

    <div class="page-wrapper">

		{/* <!-- START: HOME -->		 */}
    	<section class="section-home " id="home">
    		<div class="glass">Alice Joseph</div>
    		{/* <!-- <img src="assets/images/banner.jpg" /> --> */}
    		{/* <!-- particles.js container -->  */}
    		<div id="particles-js"></div>
    	</section>	
    	{/* <!-- END: HOME --> */}

		{/* <!-- START: ABOUT --> */}
		<section class="section section-about" id="about">
			<div class="container">
				<div class="section-head">
					<span>Get to know</span>
					<h2>About Me</h2>
				</div>

				<div class="row justify-content-center align-items-center">
					<div class="col-md-5">
						<img class="img-fluid img-thumbnail wow fadeInUp" data-wow-duration="1s" src="assets/images/avatar.jpg" alt="About Picture"/>
					</div>
					<div class="col-md-7">
						<div class="about-desc wow fadeInUp" data-wow-duration="1s"  data-wow-delay="500ms">
							<div class="about-desc-content">
								<h1 class="font-weight-light">I'm Alice Joseph</h1>
								<p class="mt-3 font-weight-light">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
							</div>

							<div class="about-desc-more text-left b-box mt-3">
								<div class="row">
									<div class="col-md-6">
										<div class="about-desc-info">
											<b>From :</b>
											<span>Miami, FL</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class="about-desc-info">
											<b>Age :</b>
											<span>19</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class="about-desc-info">
											<b>Phone :</b>
											<a href="tel:0987654321">098-765-4321</a>
										</div>
									</div>
									<div class="col-md-6">
										<div class="about-desc-info">
											<b>Email :</b>
											<a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
										</div>
									</div>
									
								</div>
							</div>

							<ul class="about-social mb-0 list-inline mt-4">
								<li class="list-inline-item">
									<a href="#" class="btn downloadCV hover-state">
										<i class="fas fa-download"></i>
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
		<section class="section section-dark section-services" id="services">
			<div class="container">
				<div class="section-head">
					<span>WHAT I DO</span>
					<h2>My Services</h2>
				</div>

				<div class="row mt-4">
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div class="services-list-icon">
								<i class="fas fa-paint-brush  "></i> 
								<span>01</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Graphic Design</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div class="services-list-icon">
								<i class="fas fa-palette  "></i>
								<span>02</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Web Development</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div class="services-list-icon">
								<i class="fas fa-compact-disc  "></i> 
								<span>03</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Media Marketing</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
							<div class="services-list-icon">
								<i class="fa fa-puzzle-piece  " aria-hidden="true"></i> <span>04</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Advetising</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
							<div class="services-list-icon">
								<i class="fa fa-gamepad  " aria-hidden="true"></i> 
								<span>05</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Game Development</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<div class="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
							<div class="services-list-icon">
								<i class="far fa-chart-bar  "></i> 
								<span>06</span>
							</div>
							<div class="mt-4">
								<h5 class="mb-0">Analytics</h5>
								<p class=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: SERVICES -->

		<!-- START: RESUME --> */}
		<section class="section section-resume" id="resume">
			<div class="container">
				<div class="section-head">
					<span>My Resume</span>
					<h2>My Expertises</h2>
				</div>

				<div class="row mt-4">
					<div class="col-sm-6 col-lg-6">
						<h5 class="section-subHead mt-3"> My Experience</h5>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Senior Architect</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2015 - Present | Google</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div>
								<h5>Front-end Developer</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2013 - 2015 | Facebook Inc.</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div>
								<h5>UI Developer</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2011 - 2013 | Envato.</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-lg-6">
						<h5 class="section-subHead mt-3"> My Education</h5>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Master in Arts</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div>
								<h5>Art University</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
						<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
							<div>
								<h5>Art University</h5>
								<h6 class="badge badge-dark d-inline-block my-3">2006-2008</h6>
								<p>Collaborate with creative and development teams on the execution of ideas.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-4">
					<div class="col-sm-6 col-lg-6">
						<h5 class="section-subHead mt-3"> Design Skills</h5>
						<div class="resume-panel b-box hover-state p-4 mt-3">

							<div class="mb-4 wow fadeInUp"  data-wow-duration="1.5s">
								<h6>Graphic Design </h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 95 + '%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>Logo Design</h6>
								<div class="progress mt-2" style={{height: 7+ 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Logo Design</h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 85+ '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-0 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>Photoshop & Figma</h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

						</div>
					</div>
					<div class="col-sm-6 col-lg-6">
						<h5 class="section-subHead mt-3"> Coding Skills</h5>
						<div class="resume-list b-box hover-state p-4 mt-3">
							<div class="mb-4 wow fadeInUp" data-wow-duration="1.5s">
								<h6>RWD</h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>Bootstrap</h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Jekyll</h6>
								<div class="progress mt-2" style={{height: 7 + "px"}}>
									<div class="progress-bar" role="progressbar" style={{width: 70 + "%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div class="mb-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>Javascript</h6>
								<div class="progress mt-2" style={{height: 7 + 'px'}}>
									<div class="progress-bar" role="progressbar" style={{width: 85 +'%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
						
			</div>
		</section>
		{/* <!-- END: RESUME -->

		<!--START: WORK -->    */}
		<section class="section section-dark section-work" id="work">
			<div class="container">
				<div class="section-head text-center">
					<span>Portfolio</span>
					<h2>My Works</h2>
				</div>
			</div>
			<div class="container swiper-container swiper-portfolio wow fadeInUp" data-wow-duration="1.5s">
				<div class=" swiper-wrapper mt-5">
					<div class="portfolio-item swiper-slide " data-groups="all slideshow">
						<a href="assets/images/p1-1.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p1-1.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p2-2.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p2-2.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide slideshow" data-groups="all slideshow">
						<a href="assets/images/p3-3.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p3-3.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide video" data-groups="all video">
						<a href="assets/images/p4-4.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p4-4.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
						<a href="assets/images/p5-5.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p5-5.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p6-6.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p6-6.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide video" data-groups="all video">
						<a href="assets/images/p7-7.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p7-7.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide  slideshow" data-groups="all slideshow">
						<a href="assets/images/p8-8.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p8-8.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

					<div class="portfolio-item swiper-slide image" data-groups="all image">
						<a href="assets/images/p9-9.jpg" class="portfolio-item--content simple-ajax-popup">
							<div class="portfolio-item--img b-box">
								<img src="assets/images/p9-9.jpg" class="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div class="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div class="portfolio-item--desc-in">
									<h3 class="mb-2 text-white">The wall</h3>
									<p class="text-white">Slideshow</p>
								</div>
							</div>
						</a>
					</div>

				</div>
				<div class="portfolio-pagination">
					
				</div>
			</div>
		</section>
		{/* <!--END: WORK -->

		<!-- START: TESTIMONY --> */}
		<section class="section section-light section-testimony" id="testimony">
			<div class="container">
				<div class="section-head text-center">
					<span>Kind Words</span>
					<h2>testimonial</h2>
				</div>
				<div class="row mt-4 pt-4">
					<div class="col-lg-12">
						<div class="swiper-container swiper-testimony wow fadeInUp"  data-wow-duration="1.5s">
							<div class="swiper-wrapper">
								<div class="swiper-slide single-testimonials ">
									<div class="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
										<p class="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div class="swiper-slide single-testimonials ">
									<div class="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
										<p class="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin.  Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
										<span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div class="swiper-slide single-testimonials ">
									<div class="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
										<p class="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div class="swiper-slide single-testimonials ">
									<div class="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
										<p class="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
										<span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

								<div class="swiper-slide single-testimonials ">
									<div class="single-testimonials-in text-center p-4 b-box mx-auto">
										<img src="assets/images/avatar1.jpg" alt="" class="mx-auto b-box"/>
										<p class="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
										<span class="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
									</div>
								</div>

							</div>
							<div class="swiper-pagination"></div>
						</div>

						<div class="testimony-nav">
							<a href="#" class="swiper-button-next"></a>
							<a href="#" class="swiper-button-prev"></a>
						</div>

					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: TESTIMONY -->

		<!-- START: CTA --> */}
		<section class="section section-freelance section-light text-center ">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-head wow fadeInUp" data-wow-duration="1.5s">
							<h2>Let's work together!</h2>
						</div>
						<div class="mt-5 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<a href="#" class="btn hover-state">Hire Me!</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: CTA -->

		<!-- START: BLOG --> */}
		<section class="section section-dark section-blog" id="blog">
			<div class="container">   
				<div class="section-head">
					<span>My Personal</span>
					<h2>Blog</h2>
				</div>                 
				<div class="mt-5">
					<div class="swiper-container swiper-blog">
						<div class="swiper-wrapper">
							<a href="#" class="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div class="blog-list--img wow fadeInUp" data-wow-duration="1.5s">
									<img src="assets/images/blog-1.jpg" alt="Blog Image" class="img-fluid"/>
									<div class="blog-list--details d-flex justify-content-center align-items-center">
										<div class="blog-list--details-in">
											<p class="blog-by text-white">Alice Joseph</p>
											<span class="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div class="blog-list--desc p-3">
									<h3>10 tips for drawing with coloured pencils</h3>
									<p class="mt-3 text-center">
										<span class="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" class="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div class="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
									<img src="assets/images/blog-2.jpg" alt="Blog Image" class="img-fluid"/>
									<div class="blog-list--details d-flex justify-content-center align-items-center">
										<div class="blog-list--details-in">
											<p class="blog-by text-white">Alice Joseph</p>
											<span class="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div class="blog-list--desc p-3">
									<h3>The single greatest gift to get your friend who always travels</h3>
									<p class="mt-3 text-center">
										<span class="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" class="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div class="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
									<img src="assets/images/blog-3.jpg" alt="Blog Image" class="img-fluid"/>
									<div class="blog-list--details d-flex justify-content-center align-items-center">
										<div class="blog-list--details-in">
											<p class="blog-by text-white">Alice Joseph</p>
											<span class="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div class="blog-list--desc p-3">
									<h3>Why all women should eat alone </h3>
									<p class="mt-3 text-center">
										<span class="blog-cat">Design</span>
									</p>
								</div>
							</a>
							<a href="#" class="swiper-slide blog-list b-box hover-state d-block mb-4">
								<div class="blog-list--img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
									<img src="assets/images/blog-1.jpg" alt="Blog Image" class="img-fluid"/>
									<div class="blog-list--details d-flex justify-content-center align-items-center">
										<div class="blog-list--details-in">
											<p class="blog-by text-white">Alice Joseph</p>
											<span class="blog-duration text-white">2 Mins Read</span>
										</div>
									</div>
								</div>
								<div class="blog-list--desc p-3">
									<h3>Drawing with coloured pencils</h3>
									<p class="mt-3 text-center">
										<span class="blog-cat">Travel</span>
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
		<section class="section section-light section-contact" id="contact">
			<div class="container">
				<div class="section-head">
					<span>say Hello</span>
					<h2>Contact </h2>
				</div>

				<div class="contact-map mt-5">
					<h5 class="section-subHead mb-4"> My Location</h5>
					<div class="contact-map--container b-box wow fadeInUp" id="map" data-wow-duration="1.5s"></div>
				</div>
			</div>

			<div class="contact-Otherdetails section-dark">
				<div class="container">
					<div class="contact-details mt-5">
						<h5 class="section-subHead pt-5 mb-4"> Get in Touch</h5>
						<div class="row">
							<div class="col-sm-6 col-lg-6">
								<div class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s">
									<div class="mb-3">
										<i class="fas fa-mobile-alt  "></i>
									</div>
									<div class="mt-2">
										<a href="tel:9876543210" class="">+987 654 3210</a>
										<p class="mt-2">Call Us</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-6">
								<div class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
									<div class="mb-3">
										<i class="fas fa-envelope  "></i>
									</div>
									<div class="mt-2">
										<a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
										<p class="mt-2">Email Us</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="contact-form mt-5">
						<form>
							<h5 class="section-subHead mb-2"> Contact Form</h5>
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s">
										<input name="name" id="name" type="text" class="form-control b-box" placeholder="Your Name*" required/>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
										<input name="email" id="email" type="email" class="form-control b-box" placeholder="Your Email*" required/>
									</div>
								</div>                                
							</div>
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
										<input type="text" class="form-control b-box" id="subject" placeholder="Your Subject.." required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
										<textarea name="comments" id="comments" rows="4" class="form-control b-box" placeholder="Your message..."></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 text-center mt-4 mb-5  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
									<a href="#" class="btn hover-state">Submit</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- END: CONTACT -->

		<!--START: FOOTER--> */}
		<footer class="footer section section-light">
			<div class="container">
				<p class="copyright text-center mb-0">&copy; Bumblebee 2019 | All Right Reserved</p>
			</div>
		</footer>
		{/* <!--END: FOOTER--> */}
	</div>

    </div>
  );
}

export default App;
