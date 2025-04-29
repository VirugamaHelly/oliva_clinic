import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Green.css'; 

const Green = () => {
  return (
    <section className="green-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Why Oliva Clinics</h2>

        <div className="row g-4">
          {/* Feature 1 */}
          <div className="col-md-6 d-flex align-items-start">
            <div className="icon me-3">
              <img 
                src="https://www.olivaclinic.com/land/common/images/why-oliva-icons/fda-approved.png" 
                alt="Advanced US-FDA approved equipment" 
              />
            </div>
            <div className="points">
              <p>Advanced US-FDA approved equipment</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-6 d-flex align-items-start">
            <div className="icon me-3">
              <img 
                src="https://www.olivaclinic.com/land/common/images/why-oliva-icons/one-to-one-consultation.png" 
                alt="Comprehensive one-to-one consultation with the doctor" 
              />
            </div>
            <div className="points">
              <p>Comprehensive one-to-one consultation with the doctor</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-6 d-flex align-items-start">
            <div className="icon me-3">
              <img 
                src="https://www.olivaclinic.com/land/common/images/why-oliva-icons/therapist.png" 
                alt="Well trained and certified therapists" 
              />
            </div>
            <div className="points">
              <p>Well trained and certified therapists</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-6 d-flex align-items-start">
            <div className="icon me-3">
              <img 
                src="https://www.olivaclinic.com/land/common/images/why-oliva-icons/protocall.png" 
                alt="Stringent guidelines and set protocols for better service efficacy" 
              />
            </div>
            <div className="points">
              <p>Stringent guidelines and set protocols for better service efficacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Green;
