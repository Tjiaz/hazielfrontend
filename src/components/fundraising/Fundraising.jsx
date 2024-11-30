import React from "react";
import "./fundraising.scss";
import Footers from "../Footers/Footers";
import { Link } from "react-router-dom";

const Fundraising = () => {
  return (
    <div className="fundraise">
      <main>
        <section className="main-title">
          <h1>Fundraise for us</h1>
          <p>
            Taking part in a fundraising event is a brilliant way to support
            Haziel's Charity. Take on a physical challenge, hold an event or
            sale, or collect sponsorship for doing something crazy!
          </p>
        </section>
        <section className="support">
          <h2>Support us through fundraising</h2>
          <p>
            {" "}
            We are thrilled at the thought of supporters getting involved in
            fundraising for our cause. Your efforts play a vital role in helping
            us make a difference in education across developing countries.
            Fundraising can take on many forms—whether it’s a small initiative
            or a large event, done individually or as part of a group, over a
            single day or extended period. Every contribution, no matter the
            size, makes an impact and is deeply valued.{" "}
          </p>{" "}
          <p>
            {" "}
            While we’re just starting our journey, we’re excited to collaborate
            with individuals and groups to create memorable fundraising events
            and initiatives. Whether it’s organizing community events, taking on
            personal challenges, or hosting creative sales, the possibilities
            are endless. Your ideas and energy could be the spark that drives
            change.{" "}
          </p>{" "}
          <p>
            {" "}
            We’re grateful for your interest in supporting Haziel’s Charity and
            helping us raise awareness for our mission. If you have a unique
            fundraising idea, we’d love to hear from you. Together, we can build
            a strong foundation for meaningful impact. Let’s make a difference!{" "}
          </p>
          <div className="button-container">
            <Link to="/donate">
              <button className="btn">Donate to the charity</button>
            </Link>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};

export default Fundraising;
