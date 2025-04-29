// import React, { useState } from 'react';
// import './Form.css';

// export default function Form() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <div className="appointment-form-container">
//         <form className="appointment-form-box">
//           <h1>Book Appointment</h1>
//           <p>Please fill the form below and expedite your consultation process.</p>

//           <input type="text" placeholder="Full Name :" className="appointment-input" /><br />
//           <input type="text" placeholder="Mobile No. :" className="appointment-input" /><br />

//           <select name="concern" id="concern" className="appointment-select" required>
//             <option value="">Select A Concern</option>
//             <option value="Unwanted Hair">Laser Hair Removal</option>
//             <option value="Acne">Pimple Treatment</option>
//             <option value="Scars">Acne Scar Treatment</option>
//             <option value="Hair">Hair Loss Treatment</option>
//             <option value="Skin Whitening">Skin Whitening</option>
//             <option value="Inch Loss Treatment">Inch Loss Treatment</option>
//             <option value="Weight Loss Treatment">Weight Loss</option>
//             <option value="Stretch Marks">Stretch Marks Treatment</option>
//             <option value="Tattoo">Tattoo Removal Treatment</option>
//             <option value="Pigmentation">Pigmentation Treatment</option>
//             <option value="Dull Skin">Dull Skin Treatment</option>
//             <option value="AntiAgeing">Anti Aging</option>
//             <option value="Fillers">Fillers Treatment</option>
//             <option value="Moles">Moles Removal</option>
//             <option value="Warts">Warts Removal</option>
//             <option value="Other">Others</option>
//           </select>

//           <div className="appointment-terms">
//             <input type="radio" name="terms" id="terms" className="appointment-radio" />
//             <label htmlFor="terms" onClick={() => setShowModal(true)}>
//               I agree to the T & C
//             </label>
//           </div>

//           <button type="submit" className="appointment-submit-btn">Call Me Back</button>
//         </form>
//       </div>

//       {showModal && (
//         <div className="appointment-modal">
//           <div className="appointment-modal-content">
//             <button className="modal-close-btn" onClick={() => setShowModal(false)}>&times;</button>
//             <h2>Terms & Conditions</h2>
//             <img src="/images/TermsCondition.jpg" alt="Terms and Conditions" className="terms-img" />

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="appointment-form-container">
        <form className="appointment-form-box">
          <h1>Book Appointment</h1>
          <p>Please fill the form below and expedite your consultation process.</p>

          <input type="text" placeholder="Full Name :" className="appointment-input" /><br />
          <input type="text" placeholder="Mobile No. :" className="appointment-input" /><br />

          <select name="concern" id="concern" className="appointment-select" required>
            <option value="">Select A Concern</option>
            <option value="Unwanted Hair">Laser Hair Removal</option>
            <option value="Acne">Pimple Treatment</option>
            <option value="Scars">Acne Scar Treatment</option>
            <option value="Hair">Hair Loss Treatment</option>
            <option value="Skin Whitening">Skin Whitening</option>
            <option value="Inch Loss Treatment">Inch Loss Treatment</option>
            <option value="Weight Loss Treatment">Weight Loss</option>
            <option value="Stretch Marks">Stretch Marks Treatment</option>
            <option value="Tattoo">Tattoo Removal Treatment</option>
            <option value="Pigmentation">Pigmentation Treatment</option>
            <option value="Dull Skin">Dull Skin Treatment</option>
            <option value="AntiAgeing">Anti Aging</option>
            <option value="Fillers">Fillers Treatment</option>
            <option value="Moles">Moles Removal</option>
            <option value="Warts">Warts Removal</option>
            <option value="Other">Others</option>
          </select>

          <div className="appointment-terms">
            <input type="radio" name="terms" id="terms" className="appointment-radio" />
            <label htmlFor="terms" onClick={() => setShowModal(true)}>
              I agree to the T & C
            </label>
          </div>

          <button type="submit" className="appointment-submit-btn">Call Me Back</button>
        </form>
      </div>

      {showModal && (
        <div className="appointment-modal">
          <button className="modal-close-btn" onClick={() => setShowModal(false)}>&times;</button>
          <div className="appointment-modal-content">
            <h2>Terms & Conditions</h2>
            <img src="/images/TermsCondition.jpg" alt="Terms and Conditions" className="terms-img" />
          </div>
        </div>
      )}
    </>
  );
}
