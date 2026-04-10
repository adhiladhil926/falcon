import React from "react";
import "../style/Clients.css";

const logos = [
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548092/wondermill-logo_x3utaq.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629036/Sristar_Service_logo_design-removebg-preview_fegs3b.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/W_Main-2_gbr6yt.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629331/download_1_kzpee5.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775628941/WhatsApp_Image_2026-04-07_at_11.54.34_AM-removebg-preview_tkgk0j.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629118/ChatGPT_Image_Apr_7__2026__02_25_32_PM-removebg-preview_bcgyzw.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629524/WhatsApp_Image_2026-04-07_at_11.40.05_AM-removebg-preview_tl3wyp.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548090/Screenshot_2026-04-07_122825_nuke9i.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629403/Screenshot_2026-04-07_122902-removebg-preview_oz1bla.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548090/Screenshot_2026-04-07_122803_v6kwcq.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775548091/New_MBK_Logistix_Logo-01_l3hzpw.png",
  "https://res.cloudinary.com/dkhzpntz0/image/upload/q_auto/f_auto/v1775629467/Screenshot_2026-04-07_173115-removebg-preview_axkynp.png"
];

function Clients() {
  return (
    <section className="clients-section">
      <h2 className="clients-title">Our Trusted Clients</h2>

      <div className="clients-grid">
        {logos.map((logo, index) => (
          <div className="client-card" key={index}>
            <img src={logo} alt={`client-${index}`} />
            <div className="overlay">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
