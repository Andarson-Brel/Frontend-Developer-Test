import React from "react";
import "./feedCard.scss";
import PrimaryButton from "../buttons/PrimaryButton";
const FeedCard = () => {
  return (
    <div className="feedCard">
      <div className="profile-container">
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
        <div className="userNameAndPosition">
          <h3>John Doe</h3>
          <p>Software Engineer at</p>
        </div>
      </div>
      <p className="description">
        How to properly manage your personal budtget?
      </p>
      <div className="insight-container">
        <div className="category">
          <img src="./images/playbutton.svg" alt="icon" loading="lazy" /> Video
        </div>
        <div className="timelaps">
          <img src="./images/clock.svg" alt="icon" loading="lazy" />
          13 min
        </div>
        <div className="likes">
          <img src="./images/star.svg" alt="icon" loading="lazy" />
          120 likes
        </div>
      </div>
      <div className="details">
        <span className="updated">5 days ago</span>
        <PrimaryButton />
      </div>
    </div>
  );
};

export default FeedCard;
