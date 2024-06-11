import React from "react";
import { campaignData } from "../../data2";
import { Link } from "react-router-dom";

const Campaigncard = ({ imgSrc, title, description, buttonText, id }) => {
  return (
    <div className="campaign-column">
      <img src={imgSrc} alt={title} className="img" />
      <div className="campaign-content">
        <h3>{title}</h3>
        <div className="campaign-underline"></div>
      </div>
      <p>{description}</p>
      <Link to={`/campaign/${id}`}>
        <button className="button recent-button">{buttonText}</button>
      </Link>
    </div>
  );
};

export default Campaigncard;
