// Support.js

import React from 'react';
import './Support.css';

function Support() {
  return (
    <div className="support-container">
      <h1>Contact Support</h1>
      <p>If you need assistance, please don't hesitate to contact our support team.</p>

      <div className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your message"></textarea>

        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default Support;
