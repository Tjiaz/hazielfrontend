import React from "react";
import { Link } from "react-router-dom";
import "./sponsors.scss";

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="partners-section">
        <h2>Partners & Supporters</h2>
        <p className="partners-description">
          We are grateful for the support of individuals, organizations, and communities who share our vision of making a positive impact. Together, we can create lasting change.
        </p>
        <div className="partners-cta">
          <p className="cta-text">Interested in partnering with us?</p>
          <Link to="/contact" className="partner-button">
            Become a Partner
          </Link>
        </div>
        <div className="impact-stats">
          <div className="stat-item">
            <h3>Our Mission</h3>
            <p>Supporting communities in need across Nigeria and Africa</p>
          </div>
          <div className="stat-item">
            <h3>Our Focus</h3>
            <p>Healthcare, Education, Women Empowerment & Community Development</p>
          </div>
          <div className="stat-item">
            <h3>Join Us</h3>
            <p>Together we can make a difference</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
