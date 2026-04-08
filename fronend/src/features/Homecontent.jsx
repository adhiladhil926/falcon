import React from 'react'
import { useNavigate } from "react-router-dom";
import "../style/Homecontent.css"

function homecontent() {
  const navigate = useNavigate();

  const content = ["https://res.cloudinary.com/dkhzpntz0/image/upload/v1774869568/ChatGPT_Image_Mar_30_2026_12_08_05_AM_tuhtua.png"]

  return (

    
    <section className="home-content">
      <div className="image-box">
        <img src={content} alt=""></img>
      </div>

      <div className="text-box">
        <h5>welcome to <strong>Falcon InfraSrtructure LLP</strong></h5>
        <hr />
        <h2>Where Infrastructure Meets Excellence</h2>
        <p>

          <strong > Falcon Infrastructures Ltd (FIL)</strong>, was formed as a public limited Company in the year
          2000 and the first phase commercial activities commenced
          in the year 2003 with Fuel Station, Commercial Complex
          with large built up area, large parking facility for
          Trucks, Weighbridge etc, along with their support
          activities and Logistics services.
        </p>
        <p><strong>FIL </strong>is the off shoot of the State Government's initiative under
          its special scheme viz. Global Investor Meet (GIM)
          for development and promotion for giving boost to
          industrial activities by establishment of essential
          Infrastructural facilities in the State, in which,
          FIL was the first to join hands with the State
          Government. The Company has a shareholder base of
          around 200 members mainly NRIs from Gulf Countries
          who has infused Rs.30 crores as equity capital.
          The debt funding for capitalization purposes is
          from the State Government's apex business funding
          agency, viz, KSIDC and the Company had in its Board
          of Directors, their nominee as well, Initially.</p>

        <button class="ui-btn" onClick={() => {
          navigate("/about")
        }}>
          <span>
            Discover More
          </span>
        </button>

      </div>
    </section>
  )
}

export default homecontent