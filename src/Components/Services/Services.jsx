import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What i offer</span>

        <div className="services-container container grid">
            <div className="services-content">
                <div className="">
                <i className="uil uil-web-grid services-icon"></i>
                <h3 className="services-title">Web Developer</h3>
                </div>
                <span className="services-button" onClick={ () => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right button-icon services-button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i onClick={() => toggleTab(0)} className= 'uil uil-times services-modal-close'></i>
                        <h3 className="services-modal-title">Web Developer </h3>
                        <p className="services-modal-description"> 
                        Create and test apps for the website.
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Designing user interfaces.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Writing and reviewing codes for sites, typically HTML or Javascript.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Develope responsive web pages.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="services-content">
                <div className="">
                <i className="uil uil-arrow services-icon"></i>
                <h3 className="services-title">Data Analyst</h3>
                </div>
                <span className="services-button" onClick={ () => toggleTab(2)} >
                    View More
                    <i className="uil uil-arrow-right button-icon services-button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i onClick={() => toggleTab(0)} className= 'uil uil-times services-modal-close'></i>
                        <h3 className="services-modal-title">Data Analyst</h3>
                        <p className="services-modal-description"> 
                        Managing master data, including creation, updates, and deletion.
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Helping develop reports and analysis.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Commissioning and decommissioning of data sets.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Train end-users on new reports and dashboards.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="services-content">
                <div className="">
                <i className="uil uil-edit services-icon"></i>
                <h3 className="services-title">Graphics Designer</h3>
                </div>
                <span className="services-button" onClick={ () => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right button-icon services-button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                    <i onClick={() => toggleTab(0)} className= 'uil uil-times services-modal-close'></i>
                        <h3 className="services-modal-title">Graphics Designer</h3>
                        <p className="services-modal-description"> 
                        Develop illustrations, logos and other designs
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Conceptualize visuals based on requirements.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Creating images and layouts by hand or using design software.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">DTesting graphics across various media.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Services