// Import necessary modules and components
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, CircularProgress } from "@mui/material";
import MainCarousel from "./MainCarousel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { encode as btoa } from "base-64";
import { setItems } from "../state";
import React, { Fragment, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import "../styles/Navbar.css";
import Slider from "react-slick";
import "../App.css";
import Item2 from "./Item2";
import "react-dropdown/style.css";
import Banner from "./Banner";
import Papers from "./Papers";
import { fetchDataFromApi } from "../utils/api";
import _ from "lodash";
import "../styles/Item2.css";
import NavMenu from "./NavMenu";
import HelpDesk from "./HelpDesk";
import { ABOUT_JKYOG_GIFT_SHOP } from "../utils/constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  ArrowForward,
  ArrowForwardIos,
  HelpOutline,
  MailOutline,
} from "@mui/icons-material";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select relevant data from Redux store
  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const breakPoint = useMediaQuery("(max-width:700px)");

  const [categories, setCategories] = useState([]);
  const [sideBanner, setSideBanner] = useState([]);
  const [singleBanner, setSingleBanner] = useState({});
  const [trendingItem, setTrendingItem] = useState({});
  const [underThePrice, setUnderThePrice] = useState({});
  const [productByCategory, setProductByCategory] = useState({});
  const [aboutJKYogDetails, setAboutJKYogDetails] = useState({});
  const [selectedSubItems, setSelectedSubItems] = useState([]);
  const [megaMenu, setMegaMenu] = useState([]);
  const [showHelpDeskForm, setShowHelpDeskForm] = useState(false);

  const handleSubCategoryClick = (subItems) => {
    setSelectedSubItems(subItems);
  };

  // Function to fetch categories from the API
  const getCategories = () => {
    fetchDataFromApi("/api/categories").then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  // Function to fetch items from the API and update Redux store
  async function getItems() {
    try {
      var headers = new Headers();
      headers.append(
        "Authorization",
        "Basic " +
          btoa(
            "ce9a3ad16708f3eb4795659e809971c4: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"
          )
      );

      const result = await fetch(
        "https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products",
        {
          headers: headers,
        }
      );

      const resp = await result.json();
      if (resp) {
        console.log(resp);
        dispatch(setItems(resp?.products));
        console.log(resp?.products, "res");
        let arr = resp?.products;
        let arr2 = resp?.products;
        arr = arr
          .slice()
          .sort((a, b) => a.variants[0].price - b.variants[0].price);
        arr2 = arr2
          .slice()
          .sort((a, b) => b.variants[0].price - a.variants[0].price);
        setAsc(arr);
        setDsc(arr2);
      }
    } catch (err) {
      console.log(err, "this is error");
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
      const a = items.filter(
        (item) => item.tags === categories[i].attributes.Type
      );
      fruitArrays[categories[i].attributes.Type] = [a];
    }
  }

  // Filter items based on tags
  const newArrivalsItems = items.filter(
    (item) => item.tags === trendingItem?.Category
  );
  const bestSellersItems = items.filter((item) => item.tags === "");
  const SwamijiKirtans = items.filter(
    (item) => item.tags === productByCategory?.Tag
  );

  // Settings for the Slick Carousel
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    marginBottom: "30px",
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

  const getMegaMenu = async () => {
    try {
      const response = await fetchDataFromApi("/api/web-app-mega-menu");
      // console.log(response, "MegaMenu");
      if (response) {
        setMegaMenu(response?.data.attributes.menuItems);
      }
    } catch (error) {
      console.error("Error fetching MegaMenu:", error);
    }
  };

  const getBanner = async () => {
    try {
      const resp = await fetchDataFromApi(
        "/api/gift-shop-sideimages?populate=*"
      );
      // console.log(resp, "responsmosmf");
      if (resp) {
        setSideBanner(resp?.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getSingleBanner = async () => {
    try {
      const resp = await fetchDataFromApi("/api/homepage-banner?populate=*");
      if (resp) {
        console.log(resp?.data, "/api/homepage-banner");
        setSingleBanner(resp?.data.attributes);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getAboutJKYogDetails = async () => {
    try {
      const resp = await fetchDataFromApi("/api/homepage-about-us?populate=*");
      if (resp) {
        // console.log(resp?.data, "/api/homepage-about-us");
        setAboutJKYogDetails(resp?.data.attributes);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getTendingItem = async () => {
    try {
      const resp = await fetchDataFromApi(
        "/api/gift-shop-home-trending-item?populate=*"
      );
      if (resp) {
        setTrendingItem(resp?.data.attributes);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // /api/gift-shop-home-products-by-category
  const getShopHomeProductsByCategory = async () => {
    try {
      const resp = await fetchDataFromApi(
        "/api/gift-shop-home-products-by-category?populate=*"
      );
      if (resp) {
        setProductByCategory(resp?.data.attributes);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // gift-shop-home-products-by-under-price
  const getProductByUnderPrice = async () => {
    try {
      const resp = await fetchDataFromApi(
        "/api/gift-shop-home-products-by-under-price?populate=*"
      );
      if (resp) {
        setUnderThePrice(resp?.data.attributes);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch side banner images and megamenudata from the API on component mount
  useEffect(() => {
    getMegaMenu();
    getBanner();
    getSingleBanner();
    getAboutJKYogDetails();
    getTendingItem();
    getShopHomeProductsByCategory();
    getProductByUnderPrice();
  }, []);

  const handleHelpDeskFormChange = () => {
    setShowHelpDeskForm(!showHelpDeskForm);
  };
  const [banner1, banner2] = sideBanner;

  return (
    <Fragment>
      <Box>
        <Box className="offersavailable">
          <Papers />
        </Box>
        <NavMenu navFromTop={false} />

        <Navbar.Collapse id="basic-navbar-nav" fixed="top">
          <Nav className="me-auto custom-nav">
            {megaMenu.length > 0 ? (
              megaMenu.map((item, index) =>
                item.SUB_CATEGORIES.length > 0 ? (
                  <NavDropdown
                    key={index}
                    title={item.TITLE}
                    id="basic-nav-dropdown"
                    onClick={() =>
                      handleSubCategoryClick(item.SUB_CATEGORIES[0].SUB_ITEMS)
                    }
                  >
                    <div className="dropdownCoverBox">
                      <div className="dropdownLeftPanel">
                        <div className="dropdownLeftPanelHeader">
                          <p
                            style={{
                              lineHeight: 1.4,
                              letterSpacing: ".1299px",
                              fontSize: 18,
                            }}
                          >
                            All {item.TITLE}
                          </p>
                          <ArrowForward size="medium" sx={{ margin: "2px" }} />
                        </div>

                        {item.SUB_CATEGORIES.map((subItem, index) => (
                          <NavDropdown.Item
                            key={index}
                            className="dropdownitem dropdownitem-selected"
                            style={{ justifyContent: "space-between" }}
                            onMouseOver={() =>
                              handleSubCategoryClick(subItem.SUB_ITEMS)
                            }
                            onClick={() => {
                              navigate(
                                `/search?category=${subItem.CATEGORY_TITLE}&filter=All&searchInput=none`
                              );
                            }}
                          >
                            {subItem.CATEGORY_TITLE}
                            <ArrowForwardIos
                              size="small"
                              sx={{ margin: "2px" }}
                            />
                          </NavDropdown.Item>
                        ))}
                      </div>
                      <div className="dropdownRightPanel">
                        <div className="dropdownRightPanelSubCategory">
                          {selectedSubItems.map((subItem, index) => (
                            <p
                              key={index}
                              style={{
                                fontSize: 20,
                                fontWeight: 400,
                                cursor: "pointer",
                                lineHeight: 1.4,
                                letterSpacing: ".1299px",
                              }}
                              onClick={() =>
                                navigate(
                                  `/search?category=${subItem.ITEM_TITLE}&filter=All&searchInput=none`
                                )
                              }
                            >
                              {subItem.ITEM_TITLE}
                            </p>
                          ))}
                        </div>
                        <div className="dropdownRightPanelImage">
                          <div className="dropdownRightPanelImageDiv">
                            <img
                              className="dropdownRightPanelImageImg"
                              src="https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/bannerimage_1_5ec00547a5.png"
                            />
                            <p
                              style={{
                                marginTop: "1rem",
                                marginBottom: 0,
                                fontSize: "12.99px",
                                lineHeight: 1.4,
                                letterSpacing: ".1299px",
                              }}
                            >
                              Editor's Picks
                            </p>
                            <p
                              style={{
                                marginTop: "5px",
                                marginBottom: 0,
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: 1.25,
                                letterSpacing: ".08px",
                              }}
                            >
                              JKYog Authors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavDropdown>
                ) : (
                  <Nav.Link className="nav-item" id="basic-nav-dropdown">
                    {item.TITLE}
                  </Nav.Link>
                )
              )
            ) : (
              <div style={{ padding: "1rem" }}>
                <CircularProgress />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>

        <div className="main-section">
          <div className="main-carousel">{<MainCarousel />}</div>
          {/* {banner1 && banner2 && (
              <>
                <div className="side-images" >
                  <Link to={banner1?.attributes?.side_images_url}>
                    <img src={banner1?.attributes?.side_images?.data?.attributes?.url} alt="image-1" />
                  </Link>
                  <Link to={banner2?.attributes?.side_images_url}>
                    <img src={banner2?.attributes?.side_images?.data?.attributes?.url} alt="image-1" />
                  </Link>
                  </div>
              </>
            )} */}
        </div>

        <div className="container boxess">
          
          {<Banner />}
          {/* {<Handpicked />} */}
          {value === "All" ? (
            <Fragment>
              <Typography
                fontFamily={"Montagu Slab"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                marginTop="1rem"
              >
                <h2
                  className="trending"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {trendingItem?.Title}
                </h2>
              </Typography>
              {newArrivalsItems?.length > 0 && (
                <Slider {...settings} className="trendingitems">
                  {newArrivalsItems.map((item) => (
                    <Item2 item={item} key={`${item.title}-${item.id}`} />
                  ))}
                </Slider>
              )}
            </Fragment>
          ) : (
            ""
          )}
        </div>

        {/*Single Banner */}
        <Link to={singleBanner?.link}>
          <Box>
            <img
              className="carousel-img"
              src={singleBanner?.imgUrl?.data.attributes.url}
              alt="none"
              style={{
                width: breakPoint ? "" : "100%",
                height: "auto",
                marginTop: breakPoint ? "4.1rem" : "4.1rem",
                objectFit: breakPoint ? "cover" : "",
                backgroundAttachment: "fixed",
              }}
            />
          </Box>
        </Link>

        <div className="container boxess">
          {value === "All" ? (
            <Fragment>
              <Typography
                fontFamily={"Lora"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                marginTop="1rem"
              >
                <h2
                  className="swamijiBooks"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {productByCategory?.Title}
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
                  gridTemplateColumns={"repeat(auto-fill, 250px)"}
                  justifyContent="space-around"
                  rowGap="100px"
                  columnGap="3.33%"
                >
                  {" "}
                  <Slider {...settings} className="trendingitems">
                    {bestSellersItems.map((item) => (
                      <Fragment>
                        <Item2 item={item} key={`${item.title}-${item.id}`} />
                      </Fragment>
                    ))}
                  </Slider>
                </Box>
              )}
              <Typography
                fontFamily={"Lora"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                marginTop="1rem"
              >
                <h2
                  className="swamijiBooks"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {underThePrice.Title}
                </h2>
              </Typography>
              {SwamijiKirtans?.length > 3 ? (
                <Slider {...settings} className="trendingitems">
                  {SwamijiKirtans.map(
                    (item) =>
                      Number(item.variants[0].price) <= underThePrice.Price && (
                        <Fragment>
                          <Item2 item={item} key={`${item.title}-${item.id}`} />
                        </Fragment>
                      )
                  )}
                </Slider>
              ) : (
                <Box
                  margin="20px auto"
                  display="grid"
                  gridTemplateColumns={"repeat(auto-fill, 250px)"}
                  justifyContent="space-around"
                  rowGap="100px"
                  columnGap="3.33%"
                >
                  {" "}
                  <Slider {...settings} className="trendingitems">
                    {bestSellersItems.map(
                      (item) =>
                        Number(item.variants[0].price) <= 30 && (
                          <Fragment>
                            <Item2
                              item={item}
                              key={`${item.title}-${item.id}`}
                            />
                          </Fragment>
                        )
                      // <Fragment>
                      //   <Item2 item={item} key={`${item.title}-${item.id}`} />
                      // </Fragment>
                    )}
                  </Slider>
                </Box>
              )}
              <Typography
                fontFamily={"Lora"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                marginTop="1rem"
                marginBottom="1.5rem"
              >
                <h2
                  className="about_jkyog_gift_shop"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {ABOUT_JKYOG_GIFT_SHOP}
                </h2>
              </Typography>
              <div className="about_jkyog_gift_shop_box">
                {/* <div className="about_jkyog_gift_shop_image"></div> */}
                <img
                  src={aboutJKYogDetails?.Thumbnail?.data.attributes.url}
                  style={{
                    width: "40%",
                    height: "300px",
                    objectFit: "fill",
                    borderRadius: "1rem",
                  }}
                />
                <div className="about_jkyog_gift_shop_textBox">
                  <p className="about_jkyog_gift_shop_text">
                    {aboutJKYogDetails?.description}
                  </p>
                  <div style={{ width: "100%" }}>
                    <button
                      className="addtocart"
                      onClick={() => navigate(aboutJKYogDetails?.Link)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <Typography
                fontFamily={"Lora"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                marginTop="2rem"
              >
                <h2
                  className="about_jkyog_gift_shop"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  Need help? You're in the right place
                </h2>
              </Typography>
              <div className="need_help">
                <button
                  className="need_help_buttons"
                  onClick={() => navigate("/faq")}
                >
                  <HelpOutline
                    sx={{ cursor: "pointer", width: "1.5em", height: "1.2em" }}
                    fontSize="large"
                  />
                  FAQ's
                </button>
                <button
                  className="need_help_buttons"
                  onClick={handleHelpDeskFormChange}
                >
                  <MailOutline
                    sx={{ cursor: "pointer", width: "1.5em", height: "1.2em" }}
                    fontSize="large"
                  />
                  Help Desk
                </button>
              </div>
              <HelpDesk
                showForm={showHelpDeskForm}
                onFormChange={handleHelpDeskFormChange}
              />
            </Fragment>
          ) : (
            ""
          )}
        </div>

      </Box>

      {/* <Box
        display="flex"
        justifyContent={"flex-end"}
        marginRight="5rem"
        className="gototp"
      >
        <Button
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          variant="contained"
          sx={{ background: "#EF6F1F" }}
        >
          <b>{HOMEPAGE_CONST.goToTop}</b>
        </Button>
      </Box> */}
    </Fragment>
  );
}

export default HomePage;
