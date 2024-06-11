// TeamCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ imgSrc, title, description, buttonText, id }) => {
  return (
    <div className="team-column">
      <img src={imgSrc} alt={title} className="img" />
      <div className="team-content">
        <h3>{title}</h3>
        <div className="teamunderline"></div>
      </div>
      <p>{description}</p>
      <Link to={`/campaign/${id}`}>
        <button className="button recent-button">{buttonText}</button>
      </Link>
    </div>
  );
};

export default TeamCard;
