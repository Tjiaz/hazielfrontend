import { useEffect, useState } from "react";
import "./eventModal.scss";

const EventModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("haziel_outreach_2025_seen");
    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("haziel_outreach_2025_seen", "true");
  };

  if (!open) return null;

  return (
    <div className="event-modal__backdrop">
      <div className="event-modal">
        <button
          className="event-modal__close"
          onClick={handleClose}
          aria-label="Close outreach notification"
        >
          ×
        </button>

        <h2 className="event-modal__title">2025 Outreach Programme</h2>
        <p className="event-modal__subtitle">
          Haziel Charity Foundation invites you to our 2025 Outreach Programme.
        </p>

        <p className="event-modal__info">
          <strong>Date:</strong> 2nd December, 2025
          <br />
          <strong>Venue:</strong> WDC Abakaliki, Ebonyi State
          <br />
          <strong>Time:</strong> 12 pm
        </p>

        <div className="event-modal__image-wrapper">
          <img
            src="/images/Outreach.jpeg"
            alt="Haziel Charity Foundation 2025 Outreach Programme flyer"
          />
        </div>

        <div className="event-modal__actions">
          {/* Change href to your event route or registration link */}
          <a
            href="/outreach-2025"
            className="event-modal__button event-modal__button--primary"
            onClick={handleClose}
          >
            View full details
          </a>
          <button
            className="event-modal__button event-modal__button--ghost"
            onClick={handleClose}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
