// import React, { useState } from "react";
// import { FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import {  FaInstagram, FaFacebook, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// import "../style/Header.css"
// import Logo from "../assets/falcon.png"

// const Header = () => {

//   const navigate=useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <>
//             <div className="top-bar">
//                 <div className="top-container">
//                     <div className="top-left" >
//                         <span ><FaPhone />+91 484 2543709, 2543990</span>
//                         <span><MdEmail />info@falconindia.co.in</span>
//                     </div>
//                     <div className="top-right">
//                         <span>
//                             <FaFacebook />
//                             <FaInstagram />
//                             <FaYoutube />
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <header className="navbar">
//                 <div className="nav-container">

//                     <img className="nav-logo" onClick={() => {
//           navigate("/")
//         }} src={Logo}></img>
//         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>

//                     <nav className="navbar1">
//                       <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

//                             <li><a href="/">Home</a></li>
//                             <li><a href="/about">About Us</a></li> 
//                             <li><a href="/service">Services</a></li>
//                             <li><a href="/clients">Clients</a></li>
//                             <li><a href="/contact">Contact Us</a></li>



//                         </ul>
//                     </nav>

//                 </div>

//             </header>
//         </>
//     )
// }


// export default Header

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
            <span><FaPhone /> +91 9496016555</span>
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
