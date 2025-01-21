import React from "react";
import { useNavigate } from "react-router-dom";
import "./eventts.scss";
import Footers from "../Footers/Footers";

const Eventts = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Haziel Charity Inauguration 2024",
      host: "Haziel Charity",
      date: "October 15, 2024",
      mainImage: "/images/event2024/1.png",
      galleryImages: [
        "/images/event2024/1.png",
        "/images/event2024/2.png",
        "/images/event2024/3.png",
        // Add more images as needed
      ],
      description: "Launching of Haziel Charity Foundation.",
      fullDescription: "Extended description for the event page...",
      location: "Event Location",
      time: "10:00 AM - 4:00 PM",
    },
    {
      id: 2,
      title: "Charity Gala",
      host: "Community Foundation",

      date: "December 20, 2024",
      mainImage: "/images/campaignpix1.jpeg",
      galleryImages: [
        "/images/event2024/1.png",
        "/images/event2024/2.png",
        "/images/event2024/3.png",
        // Add more images as needed
      ],
      description: "Annual fundraising event for education initiatives.",
      fullDescription: "Extended description for the event page...",
      location: "Event Location",
      time: "11:00 AM - 5:00 PM",
    },

    // Add more events as needed
  ];

  const handleLearnMore = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="event-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
        />
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image">
              <img
                src={event.mainImage}
                alt={event.title}
                onError={(e) => {
                  e.target.src = "/images/default.jpg";
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="host">Hosted by: {event.host}</p>
              <p className="date">{event.date}</p>
              <p className="description">{event.description}</p>
              <button
                className="event-button"
                onClick={() => handleLearnMore(event.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footers />
    </div>
  );
};

export default Eventts;
