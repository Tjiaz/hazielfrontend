import React from "react";
import "./eventts.scss";
import Footers from "../Footers/Footers";

const Eventts = () => {
  return (
    <div className="event-container">
      {/* <header className="event-header">
        <nav className="navbar">
          <div className="logo">edSeed</div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/campaigns">Campaigns</a>
            </li>
            <li>
              <a href="/about">Get To Know Us</a>
            </li>
            <li>
              <a href="/resources">Students Campaign Resources</a>
            </li>
            <li>
              <a href="/funds">Seed Funds</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
          <div className="nav-buttons">
            <button className="donate-button">Donate</button>
            <button className="campaign-button">Start Campaign</button>
            <a href="/login">Log In / Sign Up</a>
          </div>
        </nav>
        <div className="event-banner">
          <h1>Events</h1>
        </div>
      </header> */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
        />
      </div>
      <div className="events-grid">
        <div className="event-card">
          <img src="path-to-image" alt="Event 1" />
          <div className="event-info">
            <h3>Event 1</h3>
            <p>Hosted by: Host Name</p>
          </div>
        </div>
        <div className="event-card">
          <img src="path-to-image" alt="Event 2" />
          <div className="event-info">
            <h3>Event 2</h3>
            <p>Hosted by: Host Name</p>
          </div>
        </div>
        {/* Add more event cards as needed */}
      </div>
      <Footers/>
    </div>
  );
};

export default Eventts;
