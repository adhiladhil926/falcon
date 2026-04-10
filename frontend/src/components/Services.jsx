import React from 'react'
import "../style/Services.css"


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
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774524897/WhatsApp_Image_2026-03-21_at_16.51.36_goa2de.jpg"
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
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774518948/WhatsApp_Image_2026-03-21_at_16.50.47_kpdsxp.jpg"
    },
    {
        id: 6,
        title: " Electronic Weighbridge Facilities",
        discription: "100-ton electronic weighbridge for heavy vehicles.60-ton electronic weighbridge for medium cargo vehicles.Accurate and reliable weight measurement.Compliance with statutory and regulatory requirements.Faster vehicle processing and reduced waiting time.Integrated with terminal operational systems.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867610/IMG_8967_cmjxvf.jpg"
    },
    {
        id: 7,
        title: "Plug-and-Play Office Infrastructure",
        discription: "50 functionally designed office spaces within the terminal.Plug-in facilities enabling immediate operational readiness.Suitable for logistics companies and allied businesses.Well-planned layout supporting administrative efficiency.Access to common infrastructure and utilities.Professional working environment within the logistics hub.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774518948/WhatsApp_Image_2026-03-21_at_16.51.00_hsacki.jpg"
    },
    {
        id: 8,
        title: "Falcon IT Start-Up Park",
        discription: "Air-conditioned cubicles with flexible seating (minimum 2–3 seats).High-speed bandwidth connectivity for business operations.24×7 power supply with generator backup.Board rooms and client discussion rooms (6 and 10 seats).Meeting halls with 35-seat and 75-seat capacity.Air-conditioned accommodation and lodging facilities.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190062/startup_g4sfpe.jpg"
    },
    {
        id: 9,
        title: "Large-Scale Covered Warehouse Infrastructure",
        discription: "1.5 lakh sq. ft. of covered warehouse space.Designed for large-scale logistics and distribution operations.Houses major logistics hubs including e-commerce operations.Additional warehouse space leased to multiple establishments.Efficient layout supporting high-volume cargo movement.Secure and well-maintained warehousing environment.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774519508/WhatsApp_Image_2026-03-21_at_16.52.55_uwbges.jpg"
    },
    {
        id: 10,
        title: "Container Yard & Paved Yard Facilities",
        discription: "2 lakh sq. ft. paved yard area.Dedicated space for container stacking and storage.Suitable for container maintenance activities.Organized layout for safe and efficient operations.Supports large container volumes.Integrated with cargo handling services.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867607/IMG_8957_vzgslv.jpg"
    },
    {
        id: 11,
        title: "Container Handling & Transshipment Services",
        discription: "Professional stuffing and de-stuffing of containers.Secure storage of containerized cargo.Organized delivery and dispatch operations.Transshipment services for seamless cargo movement.Reduced cargo handling time.Compliance with handling and safety standards.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1774867608/IMG_8935_j8osty.jpg"
    },
    {
        id: 12,
        title: "Fire Safety, Security & Surveillance Systems",
        discription: "Advanced fire safety and firefighting infrastructure.Compliance with statutory fire safety regulations.24-hour security services across the premises.CCTV surveillance covering critical operational areas.Controlled access and monitoring systems.Enhanced safety for personnel, cargo, and assets.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190063/fire_yeo9bw.webp"
    },
    {
        id: 13,
        title: "Utilities, Equipment & Power Infrastructure",
        discription: "Availability of modern cargo handling equipment.LT and HT power connectivity for industrial operations.Backup power systems ensuring uninterrupted operations.Assured water supply across the facility.Infrastructure designed for continuous logistics activity.Support for multiple commercial and industrial users.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190062/power_ityreg.jpg"
    },
    {
        id: 14,
        title: "Solar Power & Sustainability Initiatives",
        discription: "Solar installation for reducing electricity consumption.Cost-effective energy generation for terminal operations.Environment-friendly power solutions.Reduced dependence on conventional energy sources.Support for sustainable infrastructure development.Alignment with green energy initiatives.",
        image: "https://res.cloudinary.com/dkhzpntz0/image/upload/v1772190061/solar_dn9ic5.jpg"
    }

]

function Services() {
    return (
        <section className='service-section'>
            <div className='service-header'>
                <span className="service-subtitle">Our Services</span>
                <h2>Designed for Efficiency. Built for Scale.</h2>
            </div>
            <div className='services-grid'>
                {ourService.map((service) => (
                    <div className='service-card' key={service.id}>
                        <img src={service.image} />
                        <h3>{service.title}</h3>
                        <p> {service.discription} </p>
                    </div>
                ))

                }
            </div>

        </section>
    )
}

export default Services
