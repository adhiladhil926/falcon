import React,{useState} from "react"
import "../style/Contact.css"
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";   
import "react-toastify/dist/ReactToastify.css"; 

const Contact = () => {
 window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");   
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong ❌");          
      }
    } catch (error) {
      toast.error("Error submitting form ⚠️");          
    }
  };

  return (
    <>
   <div className="feedback"><h2>CONTACT US</h2></div>
      <div className="contact-wrapper">
        
        <div className="contact-left">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label> Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Your Phone"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>FEEDBACK</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
          </div>

        
<div>
    <button onClick={handleSubmit} className="btn"><i className="animation"></i>SUBMIT<i className="animation"></i>
    </button>
</div>
        </div>

        <div className="contact-middle">
  <h3 className="person-name">
    <u>For Enquiry</u>
  </h3>

  <div className="info-item">
    <MdLocationPin className="icon1" />
   <h2>
      Falcon Infrastrucure Ltd
    </h2>
  </div>

  <div className="info-item">
    <MdPhone className="icon" />
    <a href="">+91 484 2543709,2543990</a>
  </div>

  <div className="info-item">
    <MdEmail className="icon" />
    <a href="mailto:mmshoppes@gmail.com">info@falconindia.co.in</a>
  </div>


  <div className="social-icons">
  <ul className="example-2">
  <li className="icon-content">
    <a
      data-social="linkedin"
      aria-label="LinkedIn"
      href="https://linkedin.com/"
    >
      <div className="filled"></div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.059 15.085C29.058 7.322 22.764 1.028 15 1.028S0.941 7.323 0.941 15.087c0 6.989 5.1 12.787 11.781 13.875l0.081 0.011V19.15H9.232v-4.065h3.57v-3.096a4.962 4.962 0 0 1 5.329 -5.469l-0.017 -0.001c1.124 0.016 2.212 0.115 3.273 0.292l-0.126 -0.018v3.459h-1.774a2.033 2.033 0 0 0 -2.291 2.204l-0.001 -0.008v2.636h3.899l-0.623 4.065h-3.276v9.823c6.762 -1.101 11.862 -6.899 11.863 -13.888"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">FaceBook</div>
  </li>

  <li className="icon-content">
    <a
      data-social="instagram"
      aria-label="Instagram"
      href="https://www.instagram.com/"
    >
      <div className="filled"></div>
      <svg
        // xml:space="preserve"
        viewBox="0 0 16 16"
        className="bi bi-instagram"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>
  <li className="icon-content">
    <a data-social="youtube" aria-label="Youtube" href="https://youtube.com/">
      <div className="filled"></div>
      <svg
        // xml:space="preserve"
        viewBox="0 0 16 16"
        className="bi bi-youtube"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Youtube</div>
  </li>
</ul>

  </div>
</div>

<br/>
        {/* Google Map */}
      
      </div>
        <div className="contact-right">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3698731077143!2d76.31662828416465!3d10.068748646184797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e8136b76dc9%3A0xb7736c728b528956!2sFalcon%20Infrastructures%20Ltd!5e0!3m2!1sen!2sin!4v1769147779667!5m2!1sen!2sin"    loading="lazy" ></iframe>
        </div>
          <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};

export default Contact;
