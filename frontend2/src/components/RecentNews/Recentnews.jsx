import React from "react";
import "./recentnew.scss";
import { Link } from "react-router-dom";


const Recentnews = () => {
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
          <p>February 9,2024</p>
        </div>
        <Link className="recent-link" to="/">
          RICHMOND SCHOOL SENDS BELATED CHRISTMAS GIFT TO FOUNDATION
        </Link>
        <p className="recent-text">
          Staff from Richmond School and Sixth Form College have raised £165 for
          Foundation Richmond through donating the money they would normally
          have spent on Christmas cards. Becca Thackray, Support Worker, said:
          “We are over the moon with the donation and greatly appreciate the
          generosity of the staff who donated to Foundation in lieu of sending
          […]
        </p>
        <button className="button recent-button">Read more</button>
      </div>
    </div>
  );
};

export default Recentnews;
