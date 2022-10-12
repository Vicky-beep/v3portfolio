import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
  <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
    <span className="section-subtitle">My Personal Journey</span>

    <div className="qualificaion-container container" id="qualification">
        <div className="qualification-tabs">
            <div 
            className={toggleState === 1 ?
            "qualification-button qualification-active button-flex" 
            : "qualification-button button-flex" }
            onClick={ () => toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qualification-icon"></i>
                Education
            </div>
            <div
             className={toggleState === 2 ?
              "qualification-button qualification-active button-flex" 
              : "qualification-button button-flex"}
              onClick={ () => toggleTab(2)}
              >
                <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
            </div>

        </div>

        <div className="qualification-sections">
            <div className={toggleState === 1 ? 
            "qualification-content qualification-content-active" 
            :"qualification-content"}
         
            >
                <div className="qualification-data">
                   <div className="">
                    <h3 className="qualification-title">BSc. Industrial Mathematics</h3>
                    <span className="qualification-subtitle">University Of Benin</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2016 - 2021
                    </div>
                   </div> 
                   <div className="">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                   </div>
                </div>

                <div className="qualification-data">
                <div className=""></div>

                <div className="">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>

                   <div className="">
                    <h3 className="qualification-title">Responsive Web Design</h3>
                    <span className="qualification-subtitle">FreeCodeCamp</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2020-2021
                    </div>
                   </div> 
                   
                </div>

                <div className="qualification-data">
                     

                   

                   <div className="">
                    <h3 className="qualification-title">Front-End Web Development</h3>
                    <span className="qualification-subtitle">Zuri Team, Inc.</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2022 
                    </div>
                   </div> 
                   <div className="">
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                    </div>
                   <div className=""></div>

                </div>
            </div>

            <div className={toggleState === 2 ? 
            "qualification-content qualification-content-active" 
            :"qualification-content"}
            
            >
                <div className="qualification-data">
                <div className=""></div>

                <div className="">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>

                   <div className="">
                    <h3 className="qualification-title">Sales Processing Officer </h3>
                    <span className="qualification-subtitle">Seven-Up Bottling Company</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2021 - 2022
                    </div>
                   </div> 
                   
                </div>
                <div className="qualification-data">
                   <div className="">
                    <h3 className="qualification-title">Data Analyst Intern</h3>
                    <span className="qualification-subtitle">Seven-Up Bottling Company</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2022 - Present
                    </div>
                   </div> 
                   <div className="">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                   </div>
                </div>

                <div className="qualification-data">
                <div className=""></div>

                <div className="">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>

                   <div className="">
                    <h3 className="qualification-title">Graphics Designer</h3>
                    <span className="qualification-subtitle">Coutana</span>
                    <div className="qualification-calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2020-2021
                    </div>
                   </div> 
                   
                </div>

             
            </div>
            
            
        </div>
    </div>
  </section>
  )
}

export default Qualification