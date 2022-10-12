import React from 'react'
import './portfolio.css'
import img1 from "../../assests/Screenshot (1).png"
import img2 from "../../assests/Screenshot (32).png"
import img3 from "../../assests/Screenshot (8).png"
import img4 from "../../assests/Screenshot (30).png"
import img5 from "../../assests/Screenshot (33).png"
import img6 from "../../assests/Screenshot (31).png"
const Portfolio = () => {
  return (
    <section className="section sec3 portfolio" id="portfolio"> 
            <div className="main-title">
                <h2 className='section-title'>My <span>Portfolio</span></h2>
            </div>
            <p className="section-subtitle">
               Some of my work.
            </p>
            <div className="portfolios container">
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Vicky-beep/Saint-Shop" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://saint-shop.netlify.app/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Vicky-beep/Zuri-Assignment-1" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://vicky-beep.github.io/assignment-1/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img4} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Vicky-beep/zuri-website" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://vicky-beep.github.io/zuri-website/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                           
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="https://github.com/Vicky-beep/saint-care" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://heroic-sprinkles-24c2dc.netlify.app/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                          
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-item">
                    <div className="image">
                        <img src={img5} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://v3-medicare-hospital.netlify.app/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                          
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="image">
                        <img src={img6} alt="" />
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="/" className="icon">
                            <i class="uil uil-github"></i>
                            </a>
                            <a href="https://roaring-cuchufli-f36184.netlify.app/" className="icon">
                            <i class="uil uil-link"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
                 {/* <div className="portfolio-item">
                    <div className="image">
                        <img src="./img/Screenshot (34).png" alt="">
                    </div>
                    <div className="hover-items">
                        <h3>Project Source</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://musing-nobel-3b9f87.netlify.app/" className="icon">
                                <i className="fa fa-link" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
  )
}

export default Portfolio