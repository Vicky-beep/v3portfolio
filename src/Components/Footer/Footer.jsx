import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">V3_balogun</h1>

            <ul className="footer-list">
                <li className="footer-item">
                    <a href="#about" className="footer-link">About</a>
                </li>
                <li className="footer-item">
                    <a href="#portfolio" className="footer-link">Portfolio</a>
                </li>
                <li className="footer-item">
                    <a href="#skills" className="footer-link">Skills</a>
                </li>
            </ul>
            <div className="footer-social">
            <a href="https://www.facebook.com/vickyomowumi.balogun" className="footer-social-icon" target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://github.com/Vicky-beep" className="footer-social-icon" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/victory-omowumi-b-1465a9101" className="footer-social-icon" target="_blank"  rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="hhttps://twitter.com/vicky_Balogun?t=PQAFV5c86Dy5bI0cuOGpCw&s=09" className="footer-social-icon" target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer-copyright">&#169; V3_balogun. All rights reserved </span>
        </div>
    </footer>
  )
}

export default Footer