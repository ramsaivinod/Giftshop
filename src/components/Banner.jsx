import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Importing the slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Importing the slick carousel theme CSS

import { fetchDataFromApi } from '../utils/api'; // Importing a function to fetch data from an API

import '../styles/banner.css'; // Importing CSS styles for the banner

// Slick carousel settings
var settings = {
  dots: false, // Display navigation dots (pagination) as indicators
  infinite: false, // Allow infinite loop of carousel items
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 6, // Number of items to show at once
  slidesToScroll: 2, // Number of items to scroll at a time
  initialSlide: 0, // Initial slide index

  responsive: [
    {
      breakpoint: 1024, // Screen width breakpoint
      settings: {
        slidesToShow: 4, // Adjusted number of items to show
        slidesToScroll: 1, // Adjusted number of items to scroll
      },
    },
    {
      breakpoint: 600, // Screen width breakpoint
      settings: {
        slidesToShow: 4, // Adjusted number of items to show
        slidesToScroll: 1, // Adjusted number of items to scroll
      },
    },
    {
      breakpoint: 480, // Screen width breakpoint
      settings: {
        slidesToShow: 4, // Adjusted number of items to show
        slidesToScroll: 1, // Adjusted number of items to scroll
      },
    },
  ],
};

function Banner() {
  const [tags, setTags] = useState([]); // State variable to store fetched data
  const navigate = useNavigate(); // Access the router's navigation function

  useEffect(() => {
    // Fetch data from an API when the component mounts
    const getTags = async () => {
      try {
        // Call the fetchDataFromApi function to fetch data
        const resp = await fetchDataFromApi('/api/gift-shop-contents?populate=*');
        if (resp) {
          // Update the 'tags' state with the fetched data
          setTags(resp?.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    getTags(); // Call the getTags function to initiate the data fetching
  }, []);

  return (
    <div className="banner_box">
      {tags?.length ? ( // Check if there are tags available in the state
        <Slider {...settings} style={{ width: '100%' }}>
          {tags?.map((item, i) => {
            return (
              <div key={i} className="banner_icon" onClick={() => navigate(`/category/${item?.attributes?.title}`)}>
                <div className="bannerimg">
                  <img
                    src={item?.attributes?.content_image?.data?.attributes?.url}
                    alt="banner-image"
                    className="banner_img"
                  />
                </div>

                <div className="banner_text">
                  <div className="text">{item?.attributes?.title}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Banner;
