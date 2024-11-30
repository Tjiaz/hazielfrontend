import React from "react";
import "./donate.scss";
import Footers from "../Footers/Footers";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="donate">
      <main>
        <section className="main-title">
          <h1>Donate</h1>
          <p>
            If you like what we stand for, you can help us to make a difference.
            Please consider donating to Haziel's Charity or supporting us with a
            fundraising event.
          </p>
        </section>
        <section className="how_can_you_help">
          <h2>How Can You Help? Donate Today. </h2>
          <p>
            The work we do to support education in developing countries is made
            possible by the generosity of our donors. Whether you choose to make
            a one-time donation, set up regular contributions, include gift aid,
            or leave a legacy in your will, your support makes a real
            difference. You can also get involved by{" "}
            <span>fundraising for the charity</span>.
          </p>

          <p>
            We believe in transparency and connection, ensuring our supporters
            stay informed about how their contributions are making an impact.
            Stay updated on our latest Volunteer initiatives and Educational
            Project grants across the globe, all shared here on our website.{" "}
          </p>

          <p>
            Unlike many charities, we operate without administration fees—our
            work is entirely volunteer-run. This means every penny you
            contribute goes directly to the cause it’s meant to support.{" "}
          </p>
          <p>
            Thank you for your interest. We look forward to hearing from you and
            making a difference together!
          </p>
          <div className="button-container">
            <Link to="/fundraising">
              <button className="btn">Fundraise for the charity</button>
            </Link>
          </div>
        </section>
        <section className="ways-to-donate">
          <div className="header-section">
            <h2>Ways to Donate</h2>
          </div>
          <div className="donate-content">
            <div className="donate-image">
              <img src="images/child.jpeg" alt="Child drinking water" />
            </div>
            <div className="donate-info">
              <h3>One-off Donation</h3>
              <p>
                Just want to make a simple donation? It’s straightforward to do.
                <br />
                You can:
              </p>
              <ul>
                <li>
                  Send a cheque to us at{" "}
                  <span>Haziel's Charity HQ in Nigeria</span>.
                </li>
                <li>
                  Get in touch with us{" "}
                  <a href="mailto:donate@hazielcharity.com">by email</a> to
                  receive details to make a direct transfer.
                </li>
                <li>
                  Log on to{" "}
                  <a href="https://www.justgiving.com" target="_blank">
                    JustGiving
                  </a>{" "}
                  to donate digitally (including Gift Aid donation).
                </li>
              </ul>
              <p>
                We’ve been lucky to receive some kind donations over the years,
                and if you do donate, all your money will go directly towards
                supporting Haziel's Charity’s mission.
              </p>
            </div>
          </div>
          <div className="donate-content">
            <div className="donate-info">
              <h3>Monthly Donation</h3>
              <p>
                We’re always delighted when individuals choose to make regular
                monthly donations to the Charity.
              </p>

              <p>
                Contributions like these play a vital role in ensuring the
                long-term stability of the Charity, especially in supporting our
                Partner schools and Educational Project Grants.
              </p>
              <p>
                Having consistent monthly donations allows us to plan more
                effectively for future projects and volunteer initiatives. Even
                modest monthly contributions can accumulate significantly over
                time, and we’re grateful to have built a dedicated community of
                loyal supporters.
              </p>
            </div>
            <div className="donate-image">
              <img src="images/school_children.jpeg" alt="School Children" />
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};

export default Donate;
