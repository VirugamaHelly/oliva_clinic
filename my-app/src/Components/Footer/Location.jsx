import React, { useState } from 'react';
import './Location.css'; // import your CSS file

const clinicData = {
  Hyderabad: [
    { title: "Banjara Hills", address: "House No. 8-2-270/B/1, 2nd Floor, Q Mart Building, Road No. 3, Uptown Banjara, Banjara Hills, Hyderabad." },
    { title: "Gachibowli", address: "Survey No.59 Plots nos 1 & 2, Fantasy Square, Gachibowli Road, Jayabheri Pine Valley, Hyderabad." },
    { title: "Himayatnagar", address: "1st Floor, Grandpas Royal Mansion, Near Liberty Signal, Himayat Nagar, Hyderabad." },
    { title: "Jubilee Hills", address: "3rd Floor, NBK Building, Road Number 36, Jubilee Hills, Hyderabad." },
    { title: "Kukatpally", address: "H.No. MIG 208, 1st Floor, GSR Enclave, Phase -1, KPHB Colony, Hyderabad." },
    { title: "Secunderabad", address: "H.No. 1-2-166 to 193, Bhuvana Towers, SD Road, Kalasiguda, Secunderabad." },
    { title: "Dilsukhnagar", address: "Vijetha Shyamala Prestige, Above Haldirams, Near Moosarambagh Metro Station, Hyderabad." },
  ],
  Bangalore: [
    { title: "Indira Nagar", address: "Salarpuria House, CMH Road, Indiranagar, Bengaluru." },
    { title: "HRBR Layout", address: "Plot No. #406, 7th Main, Hennur Road, Kalyan Nagar, Bengaluru." },
    { title: "HSR Layout", address: "No.810, 27th Main Road, Sector 1, HSR Layout, Bengaluru." },
    { title: "Jayanagar", address: "No #641, Opp. Raghavendra Mutt, 11th Main, Jayanagar, Bengaluru." },
    { title: "Koramangala", address: "Siddam Setty Complex, 7th Block, Bengaluru." },
    { title: "Sadashivanagar", address: "#31, Bashyam Circle, Malleshwaram West, Bengaluru." },
    { title: "Whitefield", address: "Arya Hub Mall, ITPL Main Road, Bengaluru." },
    { title: "Yelahanka", address: "HIG 2040, opposite SBI, Yelahanka New Town, Bengaluru." },
  ],
  Chennai: [
    { title: "T. Nagar", address: "North Usman Road, T. Nagar, Chennai." },
    { title: "Adyar", address: "LB Road, Adyar, Chennai." },
    { title: "Anna Nagar", address: "2nd Avenue, Anna Nagar, Chennai." },
    { title: "Velachery", address: "Velachery Main Road, Chennai." },
  ],
  Kochi: [
    { title: "Edappally", address: "Near Lulu Mall, Edappally, Kochi." },
    { title: "Kaloor", address: "Kaloor-Kadavanthra Road, Kaloor, Kochi." },
    { title: "Vyttila", address: "Vyttila Hub Junction, Kochi." },
    { title: "Kakkanad", address: "Infopark Road, Kakkanad, Kochi." },
  ],
  Vizag: [
    { title: "Dwaraka Nagar", address: "Near Diamond Park, Dwaraka Nagar, Visakhapatnam." },
    { title: "MVP Colony", address: "Sector 1, MVP Colony, Visakhapatnam." },
    { title: "Gajuwaka", address: "GNT Road, Gajuwaka, Visakhapatnam." },
    { title: "Seethammadhara", address: "Main Road, Seethammadhara, Visakhapatnam." },
  ],
  Ahmedabad: [
    { title: "CG Road", address: "3rd Floor, Heritage Plaza, CG Road, Ahmedabad." }
  ],
  Pune: [
    { title: "Koregaon Park", address: "Lane No. 5, Koregaon Park, Pune." },
    { title: "Baner", address: "Near Balewadi High Street, Baner, Pune." },
    { title: "Kothrud", address: "Paud Road, Kothrud, Pune." },
    { title: "Viman Nagar", address: "Phoenix Marketcity, Viman Nagar, Pune." },
  ],
  Mumbai: [
    { title: "Andheri West", address: "Lokhandwala Complex, Andheri West, Mumbai." },
    { title: "Bandra", address: "Linking Road, Bandra West, Mumbai." },
    { title: "Powai", address: "Hiranandani Gardens, Powai, Mumbai." },
    { title: "Thane", address: "Ghodbunder Road, Thane West, Mumbai." },
  ]
};


const Location = () => {
  const [activeCity, setActiveCity] = useState('hyderabad');

  const cityData = clinicData[activeCity] || []; // Default to empty array if city data is undefined

  return (
    <div className="location">
      <div className="location_details">
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>
          Visit Your Nearest Clinic
        </h2>

        {/* City Buttons */}
        <div className="tab">
          {Object.keys(clinicData).map((city) => (
            <button
              key={city}
              className={`tablinks ${activeCity === city ? 'active' : ''}`}
              onClick={() => setActiveCity(city)}
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>

        {/* Address Display */}
        <div className="tabcontent">
          <div className="adress-sep">
            {cityData.length > 0 ? (
              cityData.map((location, index) => (
                <div className="adress_box" key={index}>
                  <h4>{location.title}</h4>
                  <p>{location.address}</p>
                </div>
              ))
            ) : (
              <p>No clinics available for this city.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
