import React, { useState } from 'react';
import './StayConnected.css'; // Import the CSS file for styling

const StayConnected = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what happens when the form is submitted
    console.log('Email submitted:', email);
  };

  return (
    <div className="stay-connected">
      <h2>Stay Connected</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </div>
  );
};

export default StayConnected;
