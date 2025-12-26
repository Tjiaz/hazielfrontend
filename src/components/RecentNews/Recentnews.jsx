import "./recentnew.scss";
import { Link, useNavigate } from "react-router-dom";
import { getLatestEvents } from "../../eventsData";

const Recentnews = () => {
  const navigate = useNavigate();
  
  // Get the latest events - showing up to 3 most recent
  const latestEvents = getLatestEvents(3);

  const handleLearnMore = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  if (!latestEvents || latestEvents.length === 0) {
    return null;
  }

  return (
    <div className="recent-section">
      <div className="title">
        <h1>Recent news</h1>
        <p className="recent-text">
          Foundation is highly active in the community. Read about what we've
          been up to.
        </p>
        <div className="recentline"></div>
      </div>
      <br />
      <div className="recent-news-container">
        {latestEvents.map((event) => (
          <div key={event.id} className="recent-content">
            <div className="date">
              <p>{event.date}</p>
            </div>
            <Link className="recent-link" to={`/event/${event.id}`}>
              {event.title.toUpperCase()}
            </Link>
            <p className="recent-text">
              {event.newsDescription || event.fullDescription || event.description}
            </p>
            <button 
              className="button recent-button" 
              onClick={() => handleLearnMore(event.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentnews;
