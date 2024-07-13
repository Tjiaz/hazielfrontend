import React from "react";
import "./team.scss";
import teamData from "../../data";
import TeamCard from "./Teamcard";

const Team = () => {
  return (
    <section className="section-container">
      {teamData.map((team) => (
        <TeamCard
          key={team.id}
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
