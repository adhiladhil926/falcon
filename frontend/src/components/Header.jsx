import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../style/Header.css"
import Logo from "../assets/falcon.png"

const Header = () => {

  const navigate=useNavigate();

    return (
        <>
            <div className="top-bar">
                <div className="top-container">
                    <div className="top-left" >
                        <span ><FaPhone />+91 484 2543709, 2543990</span>
                        <span><MdEmail />info@falconindia.co.in</span>
                    </div>
                    <div className="top-right">
                        <span>
                            <FaFacebook />
                            <FaInstagram />
                            <FaYoutube />
                        </span>
                    </div>
                </div>
            </div>
            <header className="navbar">
                <div className="nav-container">

                    <img className="nav-logo" onClick={() => {
          navigate("/I")
        }} src={Logo}></img>

                    <nav className="navbar1">
                        <ul className="nav-menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li> 
                            <li><a href="/service">Services</a></li>
                            {/* <li><a href="#">Projects</a></li> */}
                            <li><a href="/clients">Clients</a></li>
                            <li><a href="/contact">Contact Us</a></li>



                        </ul>
                    </nav>

                </div>

            </header>
        </>
    )
}


export default Header