import React, { Component } from 'react';
import $ from "jquery";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import './vendor.css';

import Headshot from './images/headshot.jpg';

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
						<img src={require('./images/headshot.jpg')} alt="" className="img-fluid mx-auto d-block shadow-sm rounded-full"/>
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
                        <li className="list-inline-item"><a href="https://www.facebook.com/tabitha.dillinger.9"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/nicol-hawkins/?trk=people-guest_profile-result-card_result-card_full-click"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="https://github.com/nicol-hawkins"><i className="fa fa-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://stackoverflow.com/users/11810365/nicol-hawkins"><i className="fa fa-stack-overflow"></i></a></li>
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
    		{/* <!-- particles.js container -->  */}
    		<div id="particles-js"></div>
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
						<img className="img-fluid img-thumbnail wow fadeInUp" data-wow-duration="1s" src={require("./images/headshot.jpg")} alt="About Picture"/>
					</div>
					<div className="col-md-7">
						<div className="about-desc wow fadeInUp" data-wow-duration="1s"  data-wow-delay="500ms">
							<div className="about-desc-content">
								<h1 className="font-weight-light">I'm Nicol Hawkins</h1>
								<p className="mt-3 font-weight-light">
									Hi there. I'm a full-stack web developer with experience programming in JavaScript, React, Redux, Node.js, Python, Django, HTML/CSS, SQL and Postgres. 
									I chose the path of software engineering because I have a passion for creative problem solving. 
									Web development gives me challenging milestones to work towards as I continue adapting to new technologies.
                  					My interests include writing and recording music in my home studio, gardening, yoga and programming.
								</p>
							</div>

							<div className="about-desc-more text-left b-box mt-3">
								<div className="row">
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>From :</b>
											<span>Oakland, CA</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-desc-info">
											<b>Email :</b>
											<a href="mailto:hello@beingeorge.com">nicolchawkins@gmail.com</a>
										</div>
									</div>								
								</div>
							</div>

							<ul className="about-social mb-0 list-inline mt-4">
								<li className="list-inline-item">
									<a href="#" className="btn-dl downloadCV hover-state">

										{/* <Router>
											<Link to="../public/files/Nicol_Hawkins_Resume.pdf" target="_blank" download>Download</Link>
											<Switch>
												<Route path="../public/files/">
													
												</Route>
											</Switch>
										</Router> */}
										<i className="fa fa-download"></i>
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
								<i className="fa fa-desktop"></i> 
								<span>01</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Web Development</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div className="services-list-icon">
								<i className="fa fa-database"></i>
								<span>02</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Data Analysis</h5>
								<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div className="services-list-icon">
								<i className="fa fa-phone"></i>
								<span>02</span>
							</div>
							<div className="mt-4">
								<h5 className="mb-0">Customer Service</h5>
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
						<h5 className="section-subHead mt-3"> Experience</h5>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Data Analyst Intern</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2018 | Peralta Genomics Lab</h6>
                				<p>
									<ul>
										<br/>
										<li>
										- Assisted with query preparations for amphibian DNA sequences in FASTA format to prep assembly of data pipelines using PERL.
										</li>
										<br/>
										<li>
										- Parsed DNA for gene translation by assembling reads for each gene in order to detect and exclude genetic duplicates.
										</li>
										<br/>
										<li>
										- Used Python functions and dictionaries to mine and compile nucleotide sequences according to stop codons to collect specific segments of genes.
										</li>
									</ul>
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> Education</h5>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
							<div>
								<h5>Associate of Science: Natural Sciences</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2016-2018</h6>
								<p>Merrit College - Oakland, CA</p>
							</div>
						</div>
						<div className="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
							<div>
								<h5>Web Apprentice: Full-Stack Software Development</h5>
								<h6 className="badge badge-dark d-inline-block my-3">2019-2020</h6>
								<p>Kickstart Coding - Oakland, CA</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> Front-End Skills</h5>
						<div className="resume-panel b-box hover-state p-4 mt-3">

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s">
								<h6>Javascript</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 95 + '%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>React</h6>
								<div className="progress mt-2" style={{height: 7+ 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Redux</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 85+ '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-0 wow fadeInUp"  data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>HTML/CSS</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

						</div>
					</div>
					<div className="col-sm-6 col-lg-6">
						<h5 className="section-subHead mt-3"> Back-End Skills</h5>
						<div className="resume-list b-box hover-state p-4 mt-3">
							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s">
								<h6>Python</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
								<h6>Django</h6>
								<div className="progress mt-2" style={{height: 7 + 'px'}}>
									<div className="progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
								<h6>Git</h6>
								<div className="progress mt-2" style={{height: 7 + "px"}}>
									<div className="progress-bar" role="progressbar" style={{width: 70 + "%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<div className="mb-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
								<h6>SQL</h6>
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
					<h2>My Projects</h2>
				</div>
			</div>
			<div className="container swiper-container swiper-portfolio wow fadeInUp" data-wow-duration="1.5s">
				<div className=" swiper-wrapper mt-5">
					<div className="portfolio-item swiper-slide " data-groups="all slideshow">
						<a href="https://herbal-antidote.herokuapp.com/" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src={require('./images/herbal-antidote.png')} className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">Herbal Antidote</h3>
									<p className="text-white">A quiz built using python to generate recommendations for herbal remedies based on common ailments.</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide image" data-groups="all image">
						<a href="https://south-american-forests.herokuapp.com/" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src={require('./images/react-graph.png')} className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">React Graph</h3>
									<p className="text-white">An interactive react bar-chart displaying percentages of forest land in South American countries by year.</p>
								</div>
							</div>
						</a>
					</div>

					<div className="portfolio-item swiper-slide slideshow" data-groups="all slideshow">
						<a href="http://the-scratchpost.herokuapp.com/projects/" className="portfolio-item--content simple-ajax-popup">
							<div className="portfolio-item--img b-box">
								<img src={require('./images/the-scratchpost.png')} className="img-fluid mx-auto" alt="work-img"/>
							</div>
							<div className="portfolio-item--desc d-flex justify-content-center align-items-center">
								<div className="portfolio-item--desc-in">
									<h3 className="mb-2 text-white">The ScratchPost</h3>
									<p className="text-white">A minimalist beatsheet organizer for screenwriters and creatives.</p>
								</div>
							</div>
						</a>
					</div>

				</div>
				<div className="portfolio-pagination">
					
				</div>

				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
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
