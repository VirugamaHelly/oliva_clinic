import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container d-flex flex-column align-items-center text-center">
        <p className="mb-2">&copy; 2025, OLIVA CLINIC.</p>
        <div className="termsAndConditionsButton">
          <ul className="d-flex flex-wrap justify-content-center list-unstyled gap-2 mb-0">
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#termsAndConditionsModal" className="text-decoration-none">
                Terms &amp; Conditions
              </a>
            </li>
            <span className="separator">|</span>
            <li>
              <a href="#" className="text-decoration-none">
                Privacy and Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
