import React, { useState, useEffect } from 'react';
import './header.css'

function Header() {
    let [showMenuClass, setshowMenuClass] = useState("nav__menu");
    
    const handleToggler = () =>{
        if(showMenuClass == "nav__menu show-menu"){
            setshowMenuClass("nav__menu")
        }
        else{
            setshowMenuClass("nav__menu show-menu")
        }
    };

    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">Kamogelo</a>
                    <div className={showMenuClass} id="nav__manu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#home" className="nav__link nav__icon">
                                <i class="uil uil-estate"></i>
                                Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#about" className="nav__link nav__icon">
                                <i class="uil uil-user"></i>
                                About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#skills" className="nav__link nav__icon">
                                <i class="uil uil-file-alt"></i>
                                Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#services" className="nav__link nav__icon">
                                <i class="uil uil-briefcase"></i>
                                Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#portfolio" className="nav__link nav__icon">
                                <i class="uil uil-scenery"></i>
                                Portfolio
                                    
                                </a>
                            </li>
                            <li className="nav__item">
                                <a onClick={handleToggler} href="#contactMe" className="nav__link nav__icon">
                                <i class="uil uil-message"></i>Contact Me
                                    
                                </a>
                            </li>
                        </ul>
                        <i onClick={handleToggler}  class="uil uil-times nav__close" id="nav-close"></i>

                    </div>
                    <div className="nav__btns">
                        <div onClick={handleToggler}  className="nav__toggle" id="nav-toggle">
                            <i class="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
