import React from "react";
import "./aboutus.scss";
import Footers from "../Footers/Footers";

const Aboutus = () => {
  return (
    <div>
      <div className="about-page">
        <header className="header">
          <div className="header-content">
            <h1>About</h1>
            <p>Home | About</p>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <h2>More About Us</h2>
            <ul>
              <li>Accessibility</li>
              <li>Child Ambassador</li>
              <li>Conditions</li>
              <li>Data Protection</li>
              <li>Diversity</li>
              <li>Legal Advisors</li>
              <li>Our Board</li>
              <li>Our Fundraising Promise</li>
              <li>Our Medical Advisor</li>
              <li>Our Patron</li>
              <li>Our Values</li>
              <li>Standards</li>
              <li>Terms and Conditions for Donors</li>
              <li>Terms of Use</li>
            </ul>
          </aside>

          <main className="main-content">
            <blockquote>
              "You are providing a wonderful service and help. The world needs
              great souls like yours now more than ever. Thank you for caring
              and sharing!"
            </blockquote>
            <p>
              Hazel foundation provides support for families to help their
              children with disabilities and sickness.
            </p>
            <p>
              Hazel foundation is passionate about the relief of sickness and
              preservation of good physical and mental health of children and
              young people under the age of 25 years resident in Africa, Nigeria
              in particular, and without limitation, by providing and assisting
              in the provision of services and grants to enable them to obtain
              medical treatment, therapies and equipment which would not
              otherwise be available to them.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <blockquote>
              Hazel provides fundraising support for families in these areas:
            </blockquote>
            <p>
              We can help children with many different medical conditions. This
              includes the treatment and support for conditions associated with
              obsessive compulsive disorder (OCD), stress, attention deficit
              hyperactivity disorder (ADHD), Autistic Spectrum Disorder (ASD),
              and demand avoidance (PDA).
            </p>
            <blockquote className="highlight">
              We recognise that childhood is a critical and vulnerable stage
              when health inequalities can have effects that last throughout
              life. We are there at every step of this new, challenging and
              often lonely journey; from birth, or diagnosis, in an emergency,
              or at a time of crisis.
            </blockquote>
            <p>
              If we can help you further please contact us on our Freephone
              number: <a href="tel:08001691601">0800 169 1601</a>
            </p>
            <div className="image-cards">
              <div className="card">
                <img src="/images/aboutimg1.jpeg" alt="Our Values" />
                <div className="card-title">Our Values</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg2.jpeg" alt="Accessibility" />
                <div className="card-title">Accessibility</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg3.jpeg" alt="Child Ambassador" />
                <div className="card-title">Child Ambassador</div>
              </div>
              <div className="card">
                <img src="/images/aboutimg4.jpeg" alt="Legal Advisors" />
                <div className="card-title">Legal Advisors</div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Aboutus;
