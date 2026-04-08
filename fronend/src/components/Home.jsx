import React, { useEffect, useState } from "react";
import Content from "../features/homecontent";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

function Home() {

  const navigate=useNavigate();
    const images = [
        // "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190106/banner_fnedq0.png"
    //    "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774869329/9fe1d47b-f36e-43dc-b585-166e63ed904f.png"
"https://res.cloudinary.com/dkhzpntz0/image/upload/v1774955323/i_extwwq.png"
       ,
        // "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190105/banner2_yyo83x.png"
        "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867607/IMG_8957_vzgslv.jpg"
        // "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867609/IMG_8962_wajhgr.jpg"
        ,
        // "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190104/banner3_prccwz.png"
    "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774868009/IMG_8938_qco6pj.webp"
    ];
const ourService = [

    {
        id: 1,
        title: "Indian Oil Fuel & Energy Service Centre",
        discription: "Authorized Indian Oil fuel outlet supplying petrol, diesel, and CNG.Integrated Xtra Power service centre catering to heavy commercial vehicles.Reliable fuel availability supporting continuous logistics operations.Infrastructure being upgraded with EV charging installation.Designed to handle high-volume commercial traffic efficiently.Compliance with safety, quality, and operational standards.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774525768/ChatGPT_Image_Mar_26_2026_05_18_59_PM_piajrn.png"
    },
    {
        id: 2,
        title: "Truck Parking & Automated Access System",
        discription: "Dedicated bays of parking designed specifically for trucks.Automated entry and exit system for controlled vehicle movement.Reduced congestion and faster turnaround time for transporters.Organized parking layout for safety and operational efficiency.Suitable for long-haul and short-haul transport vehicles.Integrated with terminal security and monitoring systems.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774519508/WhatsApp_Image_2026-03-21_at_16.52.55_uwbges.jpg"
    },
    {
        id: 3,
        title: "Computerized Terminal Administration",
        discription: "Fully computerized terminal management system.Digital tracking of vehicles, cargo, and operational activities.Improved transparency and operational control.Faster documentation and administrative processing.Reduced manual intervention and human error.Enhanced coordination between terminal stakeholders",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774518949/WhatsApp_Image_2026-03-21_at_16.51.42_l5r5ld.jpg"
    },
    {
        id: 4,
        title: "Vehicle Spares & Consumables Retail Facilities",
        discription: "Shops dealing in spare parts for commercial vehicles.Availability of tyres, tubes, batteries, and related consumables.On-site access to essential vehicle maintenance supplies.Reduced downtime for transport operators.Support services for trucks operating within the terminal.Convenient ecosystem for logistics and transport users.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867609/IMG_8962_wajhgr.jpg"
    },
    {
        id: 5,
        title: "Storage & Warehousing Facilities",
        discription: "Spacious and well-planned storage infrastructure.Suitable for diverse cargo and commercial storage needs.Designed for efficient material handling and movement.Secure premises with controlled access.Scalable warehousing to support growing logistics demand.Integration with container and cargo handling operations.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867611/IMG_8939_b8z3ta.jpg"
    },
    {
        id: 6,
        title: " Electronic Weighbridge Facilities",
        discription: "100-ton electronic weighbridge for heavy vehicles.60-ton electronic weighbridge for medium cargo vehicles.Accurate and reliable weight measurement.Compliance with statutory and regulatory requirements.Faster vehicle processing and reduced waiting time.Integrated with terminal operational systems.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867610/IMG_8967_cmjxvf.jpg"
    },
  ]

  const logo=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548092/wondermill-logo_x3utaq.png"]
  const logo1=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775549368/Sristar_Service_logo_design_bexu1c.png"]
  const logo2=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/W_Main-2_gbr6yt.png"]
  const logo3=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/WhatsApp_Image_2026-04-07_at_11.30.53_AM_bed7p6.jpg"]
  const logo4=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/WhatsApp_Image_2026-04-07_at_11.54.34_AM_cmxjwm.jpg"]
  const logo5=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775552239/ChatGPT_Image_Apr_7_2026_02_25_32_PM_qvapl3.png"]
  const logo6=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/WhatsApp_Image_2026-04-07_at_11.40.05_AM_d8neav.jpg"]
  const logo7=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548090/Screenshot_2026-04-07_122825_nuke9i.png"]
  const logo8=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548090/Screenshot_2026-04-07_122902_odkb8c.png"]
  const logo9=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548090/Screenshot_2026-04-07_122803_v6kwcq.png"]
  const logo10=["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/New_MBK_Logistix_Logo-01_l3hzpw.png"]
const logo11 =["https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775563295/Screenshot_2026-04-07_173115_erlgvd.png"]




    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <section className="hero-section">
                {images.map((banner, index) => (
                    <img
                        key={index}
                        src={banner}
                        alt="Hero Banner"
                        className={current === index ? "active" : ""}
                    />
                ))}

                {current === 0 && (
                    <div className="hero-text premium-reveal">
                        <h1>
                            Welcome to <span>Falcon Infrastructure Ltd</span>
                        </h1>
                        <p>Building strength. Shaping the future.</p>
                        <button className="btn"> Know More
                        </button>

                    </div>
                )}
                {current === 1 && (
                    <div className="hero-text cinematic-reveal">
                        <h1>
                            Powering Progress at <span>Falcon Infrastructure Ltd</span>
                        </h1>
                        <p>Engineering excellence across logistics and infrastructure.</p>
                    </div>
                )}
                {current === 2 && (
                    <div className="hero-text sweep-reveal">
                        <h1>
                            Building the Future with <span>Falcon Infrastructure Ltd</span>
                        </h1>
                        <p>Reliable infrastructure. Sustainable progress.</p>
                    </div>
                )}
            </section>

            <div>
                <Content />
            </div>

              <section className="services-section1">
    <h2 className="services-title1"> <u>Our Services</u> </h2>

      <div className="services-container1">
        {ourService.map((service) => (
          <div className="service-card1" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="service-content1">
              <h3>{service.title}</h3>
              <p>{service.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <button className="b" onClick={() => {
          navigate("/service")
        }}> Know More
</button>



 <section class="why-choose-us1">
  <h2 class="title1">Our Clients</h2>

  {/* <div class="features1">
    <div class="features1-track">
      
      <div class="feature1"><img src={logo} alt=""/></div>
      <div class="feature1"><img src={logo1} alt=""/></div>
      <div class="feature1"><img src={logo2}alt=""/></div>
      <div class="feature1"><img src={logo3} alt=""/></div>
      <div class="feature1"><img src={logo4} alt=""/></div>
      <div class="feature1"><img src={logo5} alt=""/></div>
      <div class="feature1"><img src={logo6}alt=""/></div>

      <div class="feature1"><img src={logo7} alt=""/></div>
      <div class="feature1"><img src={logo8} alt=""/></div>
      <div class="feature1"><img src={logo9} alt=""/></div>
      <div class="feature1"><img src={logo10} alt=""/></div>
  

    </div>
  </div> */}


  <div className="features1">
  <div className="features1-track">

    {/* ORIGINAL */}
    {[logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,logo11]
    .map((img, i) => (
      <div className="feature1" key={"a" + i}>
        <img src={img} alt="" />
      </div>
    ))}

    {/* DUPLICATE */}
    {[logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,logo11]
    .map((img, i) => (
      <div className="feature1" key={"b" + i}>
        <img src={img} alt="" />
      </div>
    ))}

  </div>
</div>

</section>

        </>

    );
}

export default Home;

