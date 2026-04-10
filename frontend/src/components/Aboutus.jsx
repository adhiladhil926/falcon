import React, { useEffect, useState } from "react"
import "../style/About.css"
import Profile from "../features/Profile";
// import { useNavigate } from "react-router-dom";



function Aboutus() {

  // const navigate=useNavigate();

  const [categories, setCategories] = useState(0);
  const [customers, setCustomers] = useState(0);

  const i2=["https://res.cloudinary.com/dkhzpntz0/image/upload/v1774518948/WhatsApp_Image_2026-03-21_at_16.51.28_to2trp.jpg"]
const i3=["https://res.cloudinary.com/dkhzpntz0/image/upload/v1774519508/WhatsApp_Image_2026-03-21_at_16.52.55_uwbges.jpg"]
const    i1=   ["https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867615/IMG_8894_os8vj2.jpg"]

 useEffect(() => {
  window.scrollTo(0, 0);

  const animateCount = (setter, target, duration = 55000) => {
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setter(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  animateCount(setCustomers, 300);
  animateCount(setCategories, 190);
}, []);


  return (

     
    <>

       
      
      <section className="about-section">
     <div className="about-container">
  

    <div className="about-images">
          <img src={i2}  className="main-img" />
          <img src={i1} className="overlay-img" />
        </div>

     <div className="about-content">
          <h1><u>Falcon Infrastructure Private Limited</u></h1>
            <span className="subtitle">    Pioneering Growth Since 2000</span>
   <hr/>
   <br/>
          <p>
            <strong>Falcon Infrastructures Ltd (FIL),</strong> was formed as a public limited Company in the year 2000 and the first phase commercial activities commenced in the year 2003 with Fuel Station, Commercial Complex with large built up area, large parking facility for Trucks, Weighbridge etc, along with their support activities and Logistics services. Subsequently, in year 2007 the Company got its activities diversified and upgraded with the implementation of a State of the Art, Container Freight Station with the approval of CUSTOMS, which was first of its kind in the State of Kerala, except the small public sector CFS which was in operation earlier, and the Falcon CFS was closed down during 2018 post Maha Floods. </p>
<p>
            <strong>FIL,</strong> is the off shoot of the State Government's initiative under its special scheme viz. Global investor Meet (GIM) for development and promotion for giving boost to industrial activities by establishment of essential Infrastructural facilities in the State, in which, FIL was the first to join hands with the State Government. The Company has a shareholder base of around 200 members mainly NRIs from Gulf Countries who has infused Rs.30 crores as equity capital. The debt funding for capitalization purposes is from the State Government's apex business funding agency, viz, KSIDC and the Company had in its Board of Directors, their nominee as well, initially. The Board of Directors consists of persons of proven track record in all realms of business including Independent Directors who are registered in the DATA BANK for Independent Directors maintained by MCA and the Chairman of the Company till September 2023 was a Retired Senior IAS officer who has served both in State and Central Government as. Shipping Secretary and in various other Ministries up to the senior most level. </p>

          <p>The <strong>FIL,</strong>has a Balance sheet valuation of around Rs. 400 crores on the basis of audited financials for FY 2023-24, of which, the value of Land alone is around Rs. 363 crores, having an extent 2517.95 cents of land contiguously lying at a strategic location with free access from all around and connectivity to all parts of the State, including the Vallarpadam Container Terminal. The existing Infrastructural facilities in the premises have been established in such a way leaving large vacant space paving way for further expansion suiting to both vertical and horizontal, from time to time, depending up on activity wise feasibility and viability, in future.
        </p>   
          
          
        </div>
        </div>
          </section>

 <div>
          <Profile/>
        </div>

<div className="about-stats">
  <div className="stat">
    <h2>{customers}+</h2>
    <p>Projects</p>
  </div>

  <div className="stat">
    <h2>{categories}+</h2>
    <p>Clients</p>
  </div>
</div>
{/* mission */}
   <section className="about-section1">
      <div className="about-container1">


<div className="about-content1">
          <span className="subtitle">Our Mission</span>
          <h2>
          
Full Interagated Logistic
Solution For Business.
          </h2>
   <hr/>
   <br/>
          <p>
Our mission is to develop and provide high-quality infrastructure and logistics facilities that support industrial growth, trade, and economic development in the State of Kerala and beyond. We aim to efficiently utilize our strategically located land and infrastructure to create integrated commercial, logistics, and industrial facilities while ensuring sustainable growth and long-term value for our shareholders, customers, and stakeholders. Through professional management, strong governance, and continuous expansion and diversification of infrastructure services, Falcon Infrastructures Ltd strives to contribute to the development of logistics and industrial infrastructure in the region.          </p>

         
          
        </div>
  <div className="about-images1">
          <img src={i3} alt="Senior Care" />
          {/* <img src={smallImg} alt="Happy Seniors" className="overlay-img" /> */}
        </div>
   </div>
    </section>
{/* services */}
<br/>
<div >
   
</div>


     
      
   </>
  )
}

export default Aboutus
