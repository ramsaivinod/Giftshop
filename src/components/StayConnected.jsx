import React, { useState } from 'react';
import './StayConnected.css'; // Import the CSS file for styling
import axios from "axios";

const StayConnected = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = '961d0f182b31ae37dc63e644d4178641';
    const password = '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'; // API secret key can be used here
    const shopName = 'jkyoggiftshop';
    const your_access_token = "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";

    // https://${apiKey}:${password}@${shopName}.myshopify.com/admin/api/2023-07/customers.json

    const url = `https://${apiKey}:${password}@${shopName}.myshopify.com/admin/api/2023-07/customers.json`;
    const payload = {
        customer: {
          email: email,
        }
      };

    axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': your_access_token,
        }
      })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));

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
