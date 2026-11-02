import React, { useState } from "react";
import { FaPhone, FaInstagram, FaFacebook, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "../style/Header.css";
import Logo from "../assets/falcon.png";

const Header = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="top-container">
          <div className="top-left">
            {/* <span><FaPhone /> +91 9496016555</span> */}
            <span><MdEmail /> info@falconindia.co.in</span>
            
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

          {/* LOGO */}
          <img
            className="nav-logo"
            onClick={() => navigate("/")}
            src={Logo}
            alt="logo"
          />

          {/* TOGGLE BUTTON */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* NAV MENU */}
          <nav className="navbar1">
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/about")}>About Us</li>
               <li onClick={() => navigate("/notifications")}>Notifications</li>
              <li onClick={() => navigate("/service")}>Services</li>
              <li onClick={() => navigate("/clients")}>Clients</li>
              <li onClick={() => navigate("/contact")}>Contact Us</li>
            </ul>
          </nav>

        </div>
      </header>
    </>
  );
};

export default Header;
