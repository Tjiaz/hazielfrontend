import "./campaign.scss";
import { campaignData } from "../../data2"; // 👈 use this
import Campaigncard from "./Campaigncard";
import Footers from "../Footers/Footers";

const Campaign = () => {
  return (
    <div className="campaign">
      <main>
        <section className="main-title">
          <h1>People Helped</h1>
          <p>Haziel Charity Foundation</p>
        </section>

        <section className="people-helped">
          {campaignData.map((campaign) => (
            <Campaigncard
              key={campaign.id}
              id={campaign.id}
              imgSrc={campaign.imgSrc}
              title={campaign.title}
              description={campaign.description}
              buttonText={campaign.buttonText}
            />
          ))}
        </section>
      </main>
      <Footers />
    </div>
  );
};

export default Campaign;
