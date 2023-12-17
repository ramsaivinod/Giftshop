import React from 'react';
import './SitemapItem.css';

const SitemapItem = ({ title, items }) => {
  return (
    <div className="sitemap-item">
      <h2 className="sitemap-title">{title}</h2>
      <ul className="sitemap-list">
        {items.map((item, index) => (
          <li key={index} className="sitemap-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapItem;