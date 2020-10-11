import React, { Component } from 'react'
import Logo from '../../Components/Navbar/Logo/Logo';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
			<div>
				<div className="site-mobile-menu site-navbar-target">
				<div className="site-mobile-menu-header">
				<div className="site-mobile-menu-close mt-3">
				<span className="icon-close2 js-menu-toggle"></span>
				</div>
      		</div>
      <div className="site-mobile-menu-body"></div>
    </div>
				
			<header className="site-navbar js-sticky-header site-navbar-target" role="banner">
				<div className="container">
					<div className="row align-items-center position-relative">
						<div className="site-logo">
						<a href="#" className="text-black">KJ MOTLHALE</a>
						</div>
						<div className="col-12">
							<nav className="site-navigation text-right ml-auto " role="navigation">
			
							<ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
								<li><a href="#Personal-section" className="nav-link">Personal Details</a></li>
								<li><a href="#skills" className="nav-link">Skills</a></li>
								<li><a href="#education" className="nav-link">Education & Work Experience</a></li>
								<li><a href="#projects" className="nav-link">Projects</a></li>
								<li><a href="#testimonials" className="nav-link">Testimonials</a></li>
								<li><a href="#contact" className="nav-link">Contact</a></li>
							</ul>
							</nav>
						</div>
						<div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
			
					</div>
				</div>
			</header>
			
		</div>
        )
    }
}

export default Navbar;
