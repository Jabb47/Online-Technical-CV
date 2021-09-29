import React from 'react'
import Blob from  './Blob';
import './Home.css'
function Home() {
    return (
        <div>
            <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="www.linkedin.com/" className="home__social-icon" target="_blank">
                                <i class="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="" className="home__social-icon"  target="_blank">
                                <i class="uil uil-dribbble"></i>
                            </a>
                            <a href="" className="home__social-icon"  target="_blank">
                                <i class="uil uil-github-alt"></i>                                
                            </a>
                        </div>
                        <div className="home__img">
                        <Blob/>
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hi, I am Kamogelo</h1>
                            <h3 className="home__subtitle">Frontend developer</h3>
                            <p className="home__description"> A lot of experinece in front end web development using technologies including HTML, CSS, JS, React.js and Bootsrap </p>
                            <a href="#contact" className="button button--flex"> 
                            Contact Me <i class="uil uil-message"></i>
                            </a>
                        </div>
                    </div>
                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-button button--flex">
                            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className="home__scroll-name">Scroll down</span>
                            <i class="uil uil-arrow-down home__scroll-arrow"></i>

                        </a>
                    </div>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Home;
