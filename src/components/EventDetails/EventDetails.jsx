import { useParams, useNavigate } from "react-router-dom";
import "./event_details.scss";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This should be replaced with your actual event data fetching logic
  const events = [
    {
      id: 1,
      title: "Haziel Charity Inauguration 2024",
      host: "Haziel Charity",
      date: "October 15, 2024",
      mainImage: "/images/event2024/1.png",
      galleryImages: [
        "/images/event2024/1.png",
        "/images/event2024/3.png",
        "/images/event2024/4.png",
        "/images/event2024/5.png",
        "/images/event2024/6.png",
        "/images/event2024/7.png",
        "/images/event2024/8.png",
        "/images/event2024/9.png",
        "/images/event2024/10.png",
        "/images/event2024/11.png",
        "/images/event2024/15.png",
        "/images/event2024/17.png",
        "/images/event2024/75.png",
      ],
      videos: [
        "/images/charity2.mp4",
        "/images/charity3.mp4",
        "/images/charity5.mp4",
      ],
      description: "Launching of Haziel Charity Foundation.",
      fullDescription: "Inauguration ceremony of haziel charity foundation...",
      location: "Nigeria",
      time: "10:00 AM - 4:00 PM",
    },
    {
      id: 2,
      title: "Haziel Charity 2025 Outreach Programme",
      host: "Haziel Charity",
      date: "December 2, 2025",
      mainImage: "/images/Outreach.jpeg",
      galleryImages: ["/images/event2025/e1.jpeg"],
      videos: ["/images/event2025/video1.mp4", "/images/event2025/video2.mp4"],
      description: "Coming",
      fullDescription: "Join us for our comprehensive 2025 Outreach Programme featuring free medical outreach services, distribution of palliatives to underserved communities, widow empowerment initiatives, and scholarship opportunities for deserving students. This event aims to provide essential healthcare services, support vulnerable families, empower widows through skills training and resources, and offer educational support to children in need. Together, we're making a meaningful impact in Abakaliki, Ebonyi State.",
      location: "Abakaliki Nigeria",
      time: "12:00PM",
    },
  ];

  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Events
      </button>

      <div className="event-header">
        <h1>{event.title}</h1>
        <div className="event-meta">
          <p className="date">{event.date}</p>
          <p className="host">Hosted by: {event.host}</p>
          <p className="location">{event.location}</p>
          <p className="time">{event.time}</p>
        </div>
      </div>

      <div className="main-image">
        <img src={event.mainImage} alt={event.title} />
      </div>

      <div className="event-description">
        <h2>About This Event</h2>
        <p>{event.fullDescription}</p>
      </div>

      {event.galleryImages && event.galleryImages.filter(img => img && img.trim() !== "").length > 0 && (
        <div className="event-gallery">
          <h2>Event Gallery</h2>
          <div className="gallery-grid">
            {event.galleryImages.filter(img => img && img.trim() !== "").map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image}
                  alt={event.title}
                  onError={(e) => {
                    e.target.src = "/images/default.jpg";
                    e.target.onerror = null;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {event.videos && event.videos.filter(vid => vid && vid.trim() !== "").length > 0 && (
        <div className="event-videos">
          <h2>Event Videos</h2>
          <div className="video-grid">
            {event.videos.filter(vid => vid && vid.trim() !== "").map((video, index) => (
              <div className="video-item" key={index}>
                <video controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
