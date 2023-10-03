import React from 'react';
import './Events.css'; 

function Events() {
  return (
    <div className="Events--container">
      <div className="Events--header">
        <h1>Upcoming Events</h1>
        <p>Join us for exciting experiences and networking opportunities.</p>
      </div>
      <div className="Events--event-list">
        <div className="Events--event">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Event 1"
            className="Events--event-image"
          />
          <h2>Event 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>
          <button className="Events--register-button">Register Now</button>
        </div>
        <div className="Events--event">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Event 2"
            className="Events--event-image"
          />
          <h2>Event 2</h2>
          <p>
            Sed consequat, leo eget bibendum sagittis, ex libero bibendum
            libero.
          </p>
          <button className="Events--register-button">Register Now</button>
        </div>
    
      </div>
    </div>
  );
}

export default Events;
