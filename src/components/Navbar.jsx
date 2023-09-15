import { useDispatch, useSelector } from "react-redux";
import Jklog from "../logo/jklogo.png";

import {
  Badge,
  Box,
  IconButton,
  Input,
  Typography,
  Button,
  Form,
  MenuList,
  List,
} from "@mui/material";
import MainCarousel from "./MainCarousel";
import { makeStyles } from "tss-react/mui";
import "./style.css";
import books from "../logo/banner-1.jpeg";
import coupons from "../logo/banner-3.jpeg";
import Handpicked from "./Handpicked";
import { setIsFilterOpen } from "../state";
import { useNavigate } from "react-router-dom";
import { encode as btoa } from "base-64";
import { setItems, setValue, setPriceFilter, setSortOrder } from "../state";
import React, { Fragment, useEffect, useState, useRef, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
//import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Navbar.css";
import Slider from "react-slick";
import "../App.css";
import Item2 from "./Item2";
import styled from "@emotion/styled";
import "react-dropdown/style.css";
import Banner from "./Banner";
import Papers from "./Papers";
import { fetchDataFromApi } from "../utils/api";
import _ from "lodash";
import "../styles/Item2.css";
import NavMenu from "./NavMenu";

const FlexBox = styled(Box)`
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
`;

function Navbars() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);
  const cart = useSelector((state) => state.cart.cart);

  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const [item, setItem] = useState([]);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const breakPoint2 = useMediaQuery("(max-width:1220px)");
  const breakPoint3 = useMediaQuery("(min-width:1220px)");
  const [search, setSearchField] = useState("");
  const [menu, setMenu] = useState(false);
  const [asc, setAsc] = useState([]);
  const [dsc, setDsc] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const getCategories = () => {
    fetchDataFromApi("/api/categories").then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

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
        setItem(resp?.products);
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

  useEffect(() => {
    getItems();
    getCategories();
    // getCollections();
  }, []);

  useMemo(() => {
    const filtered = items.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setItem(filtered);
  }, [items, search]);

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

  const englishbooks = items.filter((item) => item.tags === "English Books");
  const newArrivalsItems = items.filter((item) => item.tags === "POS");
  const bestSellersItems = items.filter((item) => item.tags === "");
  const SwamijiKirtans = items.filter(
    (item) => item.tags === "Swamiji Kirtans"
  );
  const BalMukundBooks = items.filter(
    (item) => item.tags === "BalMukund Books"
  );
  const EnglishLectures = items.filter(
    (item) => item.tags === "English Lectures-Swamiji (Audio)"
  );
  const Videos = items.filter((item) => item.tags === "Videos");

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    marginBottom: "30px",
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    // width: "90%",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          // width: "80%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          // width: "80%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // width: "60%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // width: "40%",
          dots: false,
        },
      },
    ],
  };

  const styles = makeStyles((theme) => ({
    select: {
      "&:before": {
        borderColor: "",
      },
      "&:after": {
        borderColor: "",
      },
    },
    icon: {
      right: "0px",
      background: "red",
    },
  }));

  const classes = styles();
  return (
    // <Slider {...settings}>
    <Fragment>
      <Box>
        <Box className="offersavailable">
          <Papers />
        </Box>

        <NavMenu navFromTop={false} />

        <div className="container boxess">
          <div className="main-section">
            <div className="main-carousel">{<MainCarousel />}</div>
            <div className="side-images">
              <img src={books} alt="image-1" />
              <img src={coupons} alt="image-1" />
            </div>
          </div>

          {<Banner />}
          {/*  <FrameComponent />*/}

          {/* <RectangleBanner /> */}
          {<Handpicked />}

          {value === "All" ? (
            <Fragment>
              {/* <SnackbarProvider /> */}
              <Typography
                //fontFamily={"Labrada"}
                //fontFamily={"'Lora'"}
                fontFamily={"Montagu Slab"}
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                padding="10px"
                // color="#ff6d31"
              >
                <h2 className="trending"> Trending </h2>
              </Typography>
              {newArrivalsItems?.length > 0 && (
                <Slider {...settings} className="trendingitems">
                  {newArrivalsItems.map((item) => (
                    <Item2 item={item} key={`${item.title}-${item.id}`} />
                  ))}
                </Slider>
              )}
              {/* <Benefits />*/}
              <Typography
                //fontFamily={"Labrada"}
                fontFamily={"Lora"}
                // mt="3px"
                variant={breakPoint ? "h2" : "h1"}
                textAlign="left"
                padding="11px"
                // color="#ff6d31"
              >
                <h2 className="bestsellers">Best Sellers</h2>
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
                  // gridTemplateColumns={breakPoint ? "repeat(auto-fill, 300px)" : "repeat(auto-fill, 200px)"}
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
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </Box>

      <Box
        display="flex"
        justifyContent={"flex-end"}
        marginRight="5rem"
        className="gototp"
      >
        <Button
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          variant="contained"
          sx={{ background: "#ff6d2f" }}
        >
          <b>Go To Top </b>
        </Button>
      </Box>
    </Fragment>
    // </Slider>
  );
}

export default Navbars;
