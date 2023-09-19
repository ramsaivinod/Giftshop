// Import necessary modules and components
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import MainCarousel from './MainCarousel';
import '../styles/style.css';

import Handpicked from './Handpicked';
import { Link } from 'react-router-dom';
import { encode as btoa } from 'base-64';
import { setItems } from '../state';
import React, { Fragment, useEffect, useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Navbar.css';
import Slider from 'react-slick';
import '../App.css';
import Item2 from './Item2';
import 'react-dropdown/style.css';
import Banner from './Banner';
import Papers from './Papers';
import { fetchDataFromApi } from '../utils/api';
import _ from 'lodash';
import '../styles/Item2.css';
import NavMenu from './NavMenu';
import { HOMEPAGE_CONST } from '../utils/constants';

function HomePage() {
  const dispatch = useDispatch();

  // Select relevant data from Redux store
  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const breakPoint = useMediaQuery('(max-width:700px)');

  const [categories, setCategories] = useState([]);
  const [sideBanner, setSideBanner] = useState([]);

  // Function to fetch categories from the API
  const getCategories = () => {
    fetchDataFromApi('/api/categories').then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  // Function to fetch items from the API and update Redux store
  async function getItems() {
    try {
      var headers = new Headers();
      headers.append(
        'Authorization',
        'Basic ' + btoa('ce9a3ad16708f3eb4795659e809971c4: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'),
      );

      const result = await fetch('https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products', {
        headers: headers,
      });

      const resp = await result.json();
      if (resp) {
        console.log(resp);
        dispatch(setItems(resp?.products));
        console.log(resp?.products, 'res');
        let arr = resp?.products;
        let arr2 = resp?.products;
        arr = arr.slice().sort((a, b) => a.variants[0].price - b.variants[0].price);
        arr2 = arr2.slice().sort((a, b) => b.variants[0].price - a.variants[0].price);
        setAsc(arr);
        setDsc(arr2);
      }
    } catch (err) {
      console.log(err, 'this is error');
    }
  }

  // Fetch data from API on component mount
  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  // Initialize an object to store items by category
  var fruitArrays = {};
  console.log(categories);
  if (categories) {
    for (var i = 0; i < categories.length; i++) {
      const a = items.filter((item) => item.tags === categories[i].attributes.Type);
      fruitArrays[categories[i].attributes.Type] = [a];
    }
  }

  // Filter items based on tags
  const newArrivalsItems = items.filter((item) => item.tags === 'POS');
  const bestSellersItems = items.filter((item) => item.tags === '');
  const SwamijiKirtans = items.filter((item) => item.tags === 'Swamiji Kirtans');

  // Settings for the Slick Carousel
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    marginBottom: '30px',
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // Fetch side banner images from the API on component mount
  useEffect(() => {
    const getBanner = async () => {
      try {
        const resp = await fetchDataFromApi('/api/gift-shop-sideimages?populate=*');
        if (resp) {
          setSideBanner(resp?.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    getBanner();
  }, []);

  const [banner1, banner2] = sideBanner;

  return (
    <Fragment>
      <Box>
        <Box className="offersavailable">
          <Papers />
        </Box>

        <NavMenu navFromTop={false} />

        <div className="container boxess">
          <div className="main-section">
            <div className="main-carousel">{<MainCarousel />}</div>
            {banner1 && banner2 && (
              <>
                <div className="side-images">
                  <Link to={banner1?.attributes?.side_images_url}>
                    <img src={banner1?.attributes?.side_images?.data?.attributes?.url} alt="image-1" />
                  </Link>
                  <Link to={banner2?.attributes?.side_images_url}>
                    <img src={banner2?.attributes?.side_images?.data?.attributes?.url} alt="image-1" />
                  </Link>
                </div>
              </>
            )}
          </div>

          {<Banner />}
          {<Handpicked />}
          {value === 'All' ? (
            <Fragment>
              <Typography
                fontFamily={'Montagu Slab'}
                variant={breakPoint ? 'h2' : 'h1'}
                textAlign="left"
                padding="10px">
                <h2 className="trending" style={{ fontFamily: 'HeuristicaRegular' }}>
                  {' '}
                  Trending{' '}
                </h2>
              </Typography>
              {newArrivalsItems?.length > 0 && (
                <Slider {...settings} className="trendingitems">
                  {newArrivalsItems.map((item) => (
                    <Item2 item={item} key={`${item.title}-${item.id}`} />
                  ))}
                </Slider>
              )}
              <Typography fontFamily={'Lora'} variant={breakPoint ? 'h2' : 'h1'} textAlign="left" padding="11px">
                <h2 className="bestsellers" style={{ fontFamily: 'HeuristicaRegular' }}>
                  Best Sellers
                </h2>
              </Typography>
              {SwamijiKirtans?.length > 3 ? (
                <Slider {...settings} className="trendingitems">
                  {SwamijiKirtans.map((item) => (
                    <Fragment>
                      <Item2 item={item} key={`${item.title}-${item.id}`} />
                    </Fragment>
                  ))}
                </Slider>
              ) : (
                <Box
                  margin="20px auto"
                  display="grid"
                  gridTemplateColumns={'repeat(auto-fill, 250px)'}
                  justifyContent="space-around"
                  rowGap="100px"
                  columnGap="3.33%">
                  {' '}
                  <Slider {...settings} className="trendingitems">
                    {bestSellersItems.map((item) => (
                      <Fragment>
                        <Item2 item={item} key={`${item.title}-${item.id}`} />
                      </Fragment>
                    ))}
                  </Slider>
                </Box>
              )}
            </Fragment>
          ) : (
            ''
          )}
        </div>
      </Box>

      <Box display="flex" justifyContent={'flex-end'} marginRight="5rem" className="gototp">
        <Button
          onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
          variant="contained"
          sx={{ background: '#ff6d2f' }}>
          <b>{HOMEPAGE_CONST.goToTop}</b>
        </Button>
      </Box>
    </Fragment>
  );
}

export default HomePage;
