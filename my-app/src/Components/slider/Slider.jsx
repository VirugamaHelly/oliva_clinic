import React from 'react';
import './Slider.css';

export default function Slider() {
  return (
    <div className="slider-container">
      <div className="img">
        <img
          className="desktop-img"
          src="https://www.olivaclinic.com/land/banners/dermatology.jpg"
          alt="Dermatology Banner"
        />
        <img
          className="mobile-img"
          src="https://www.olivaclinic.com/land/banners/mobile/dermatology-mobile-banner.jpg"
          alt="Mobile Dermatology Banner"
        />
      </div>
    </div>
  );
}
