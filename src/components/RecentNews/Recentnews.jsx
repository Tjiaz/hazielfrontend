import React from "react";
import "./recentnew.scss";
import { Link, useNavigate } from "react-router-dom";

const Recentnews = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/event/1"); // Navigates to event details page with ID 1
  };
  return (
    <div className="recent-section">
      <div className="title">
        <h1>Recent news</h1>
        <p className="recent-text">
          Foundation is highly active in the community. Read about what we’ve
          been up to.
        </p>
        <div className="recentline"></div>
      </div>
      <br />
      <div className="recent-content">
        <div className="date">
          <p>October 15, 2024</p>
        </div>
        <Link className="recent-link" to="/event/1">
          HAZIEL CHARITY FOUNDATION LAUNCHES IN NIGERIA
        </Link>
        <p className="recent-text">
          Haziel Charity Foundation officially launched its operations in
          Nigeria, marking a significant milestone in its mission to serve
          communities in need. The launch event, held in Nigeria, brought
          together community leaders, supporters, and beneficiaries. The
          foundation aims to focus on education, healthcare, and community
          development initiatives across Nigeria. During the launch, several key
          programs were announced, including scholarship schemes for
          underprivileged students and healthcare support for local communities.
        </p>
        <button className="button recent-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Recentnews;
