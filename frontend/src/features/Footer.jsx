import React from "react";
import "../style/Footer.css";
// import Logo from "../assets/falcon.png"

// import Logo from "../assets/logo.png";


 const logo=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775625335/falcon-removebg-preview_luogax.png"]
const f=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775553564/facebook_bklyta.png"]
const i=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775553564/instagram_hsucnj.png"]
const y=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775553564/youtube_uenxdt.png"]



const Footer = () => {
    window.scrollTo(0, 0);
    return (
        <footer className="footer-animated-bg">
            <div className="footer">
                {/* MAIN CONTENT */}
                <div className="footer-main">

                    <div className="footer-col">
                        <img src={logo} alt="falcon" className="logo-img" />
                      
                    </div>
                    <div className="falcon-d">  <p>
            <strong>Falcon Infrastructures Ltd (FIL),</strong> was formed as a public limited Company in the year 2000 and the first phase commercial activities commenced in the year 2003 with Fuel Station, Commercial Complex with large built up area, large parking facility for Trucks, Weighbridge etc, along with their support activities and Logistics services. 
</p></div>

                  

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <a href="/service">Services</a>
                        {/* <a href="/project">project</a> */}
                        <a href="/clients">client</a>     
                      <a href="/about">About Us</a>
                                              <a href="/contact">Contact Us</a>


                    </div>

                    <div className="footer-col social-section">
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img  src={f} alt="Facebook" className="social-img" />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={i} alt="Instagram" className="social-img" />
                            </a>

                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <img src={y} alt="YouTube" className="social-img1" />
                            </a>
                        </div>

                        <a href="tel:">+91 484 2543709, 2543990</a>
                        <a href="mailto:info@falconindia.co.in">
                        </a>

                        <p>
                            <strong>Falcon Infrastructure</strong><br />
                            Puthiya Road jn,Udhyogamandal P.O<br />
                            PB No.4030,kochi 683501<br />
                            Kerala, India
                        </p>


                    </div>

                </div>

                <hr className="footer-divider" />

                <div className="copy">
                    <p>
                        All Rights Reserved © 2026
                        Powered by <strong>Wondermill LLP</strong>
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
