import React from "react";
import "./team.scss";
import teamData from "../../data";
import TeamCard from "./Teamcard";

const Team = () => {
  const displayTeam = teamData.slice(0, 3);
  return (
    <section className="section-container">
      {displayTeam.map((team) => (
        <TeamCard
          key={team.id}
          id={team.id}
          imgSrc={team.imgSrc}
          title={team.title}
          description={team.description}
          buttonText={team.buttonText}
          link={team.link}
        />
      ))}
    </section>
  );
};

export default Team;
