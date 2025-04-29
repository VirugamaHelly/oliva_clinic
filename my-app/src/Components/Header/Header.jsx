import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header>
        <div className="main">
          <div className="left">
            <img
              src="https://www.olivaclinic.com/land/common/logo.svg?var=1"
              alt="Oliva Clinic"
              height="80px"
            />
          </div>
          <div className="right">
            <div className="phone_Logo">
              <img
                src="https://www.olivaclinic.com/land/common/css/phone-call.svg"
                alt="Phone"
                width="37px"
              />
              <div className="phone_text">
                <h1>8886 133 300</h1>
                <p>Talk To Our Experts Now</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
