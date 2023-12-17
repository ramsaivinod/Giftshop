import React from 'react';
import SitemapItem from './SitemapItem';
import './SiteMap.css';
import NavMenu from "./NavMenu";

const Sitemap = () => {

  const sections = [
    {
      "title": "Swami's Books",
      "items": ["Mind Management", "Life Transformation", "Meditation", "Nutrition & Diet", "Yoga & Lifestyle", "Vedic Scriptures", "Human Excellence"]
    },
    {
      "title": "Maharaj's Books",
      "items": ["Devotional Songs", "Fundamentals of Sadhana"]
    },
    {
      "title": "For Kids",
      "items": ["Saints Collection", "Moral Story Collection", "Mythology Stories Collection", "Character Building Series"]
    },
    {
      "title": "Languages",
      "items": ["English", "Hindi", "Telugu", "Gujarati", "Marathi", "Odia"]
    },
    {
      "title": "eBooks",
      "items": ["Swami's Books"]
    },
    {
      "title": "Kirtan Books",
      "items": ["Prayer & Aarti", "Humbleness", "Devotion", "Divine Pastimes", "Guru", "Festivals"]
    },
    {
      "title": "Books",
      "items": [
        "Mythology Stories Collection",
        "Bundles",
        "Yoga & Meditation",
        "Shlokas",
        "Hinduism",
        "Self-Help"
      ]
    },
    {
      "title": "Shop by Age",
      "items": [
        "Youth (10+)",
        "7-9 years",
        "Kids under 6"
      ]
    },
    {
      "title": "More for kids",
      "items": [
        "Audio",
        "Toys"
      ]
    },
    {
      "title": "Bhajans & Kirtans",
      "items": [
        "Swamiji’s Voice",
        "Maharajji’s Voice",
        "JKYog Music"
      ]
    },
    {
      "title": "Kirtan Books",
      "items": [
        "Prayer & Aarti",
        "Humbleness",
        "Devotion",
        "Divine Pasttimes",
        "Guru",
        "Festivals"
      ]
    },
    {
      "title": "Clothes",
      "items": [
        "T-Shirts",
        "Shawls"
      ]
    },
    {
      "title": "Jewelry",
      "items": [
        "Bangles",
        "Necklaces",
        "Earrings"
      ]
    },
    {
      "title": "Toys",
      "items": [
        "Dolls",
        "Stuffed Toys",
        "Puzzles"
      ]
    },
    {
      "title": "Decor",
      "items": [
        "Art",
        "Cutouts",
        "Photos"
      ]
    },
    {
      "title": "Other",
      "items": [
        "Yoga Mats",
        "Water bottles",
        "Pens",
        "Keychains",
        "Bookmarks"
      ]
    }
  ];
  

  return (
    <div>
      <NavMenu navFromTop={true} />
      <div className="main-section container">
        <div className="sitemap">
          {sections.map((section, index) => (
            <SitemapItem key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Sitemap;