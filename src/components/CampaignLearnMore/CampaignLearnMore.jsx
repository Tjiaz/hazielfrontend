import { useParams } from "react-router-dom";
import { campaignData } from "../../data2";
import "./campaignlearnmore.scss";
import Footers from "../Footers/Footers";

const CampaignLearnMore = () => {
  const { id } = useParams();

  const campaign = campaignData.find((c) => c.id === parseInt(id));
  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <>
      <div className="campaign-details">
        <header className="header">
          <div className="breadcrumbs">
            <a href="/">All Posts</a> &nbsp; / &nbsp;{" "}
            <a href="/">Train of Thought</a>
          </div>
          <div className="post-info">
            <p>{campaign.date || "Nov 13, 2025"} &bull; 6 min read</p>
            <h1>{campaign.title}</h1>
            <p className="updated">Updated: Nov 13</p>
          </div>
        </header>

        <div className="content">
          <div className="image-container">
            <img src={campaign.imgSrc} alt={campaign.title} />
          </div>

          {/* You can keep using your HTML detail field */}
          <div
            className="text-content"
            dangerouslySetInnerHTML={{ __html: campaign.detail }}
          ></div>
        </div>

        {/* NEW: Chat history */}
        {campaign.chat && campaign.chat.length > 0 && (
          <section className="chat-history">
            <h2>Conversation (anonymised)</h2>
            <div className="chat-thread">
              {campaign.chat.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message chat-message--${msg.from}`}
                >
                  <div className="chat-bubble">
                    <div className="chat-meta">
                      <span className="chat-name">
                        {msg.from === "charity" ? "Haziel Team" : msg.name}
                      </span>
                      {msg.time && (
                        <span className="chat-time">{msg.time}</span>
                      )}
                    </div>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEW: Video section */}
        {campaign.videos && campaign.videos.length > 0 && (
          <section className="campaign-videos">
            <h2>Video Updates</h2>
            <div className="video-grid">
              {campaign.videos.map((video, index) => (
                <div key={index} className="video-card">
                  <video src={video.url} controls />
                  {video.caption && (
                    <p className="video-caption">{video.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footers />
    </>
  );
};

export default CampaignLearnMore;
