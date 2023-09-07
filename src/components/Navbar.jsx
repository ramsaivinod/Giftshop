import { useDispatch, useSelector } from "react-redux"
import Jklog from "../logo/jklogo.png"

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
} from "@mui/material"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Item from "./Item"
import MainCarousel from "./MainCarousel"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Select from "@mui/material/Select"
import { makeStyles } from "tss-react/mui"
import Benefits from "./Benefits"
import "./style.css"
import books from "../logo/3.avif"
import coupons from "../logo/4.avif"
import giftcard from "../logo/3.webp"
//import { Image, Typography } from "@mui/material";
import Handpicked from "./Handpicked"
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  WindowSharp,
} from "@mui/icons-material"
import Popover from "@mui/material"
import { SearchOutlined } from "@mui/icons-material"
//import { useNavigate } from "react-router-dom";
//import { shades } from "../theme";
import { FormControl, InputLabel } from "@mui/material"
import { setIsCartOpen, setIsNavOpen, setIsFilterOpen } from "../state"
import { useNavigate } from "react-router-dom"
import { encode as btoa } from "base-64"
import { setItems, setValue, setPriceFilter, setSortOrder } from "../state"
import React, { Fragment, useEffect, useState, useRef, useMemo } from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
//import axios from "axios";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Navbar.css"
import Slider from "react-slick"
import Slider2 from "react-slick"
import "../App.css"
import Item2 from "./Item2"
import PriceFilter from "./PriceFilter"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import styled from "@emotion/styled"
import SortRadioButtons from "./SortRadioButtons"
import CategoriesButton from "./CategoriesButton"
import { SnackbarProvider, enqueueSnackbar } from "notistack"
import CancelIcon from "@mui/icons-material/Cancel"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import TuneIcon from "@mui/icons-material/Tune"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import RectangleBanner from "./RectangleBanner"
import Banner from "./Banner"
import Papers from "./Papers"
import QuickView from "./QuickView"
import App from "../App.js"
import FrameComponent from "./FrameComponent"
import { fetchDataFromApi } from "../utils/api"
import _ from "lodash"
import "../styles/Item2.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const FlexBox = styled(Box)`
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
`

function Navbars() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const isNavOpen = useSelector((state) => state.cart.isNavOpen)
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen)
  const cart = useSelector((state) => state.cart.cart)

  const items = useSelector((state) => state.cart.items)
  const value = useSelector((state) => state.cart.value)
  const sortOrder = useSelector((state) => state.cart.sortOrder)
  const [item, setItem] = useState([])
  const breakPoint = useMediaQuery("(max-width:700px)")
  const breakPoint2 = useMediaQuery("(max-width:1220px)")
  const breakPoint3 = useMediaQuery("(min-width:1220px)")
  const [search, setSearchField] = useState("")
  const [menu, setMenu] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [show, setShow] = useState(false)
  const [view, setView] = useState(true)
  const [hide, setHide] = useState(true)
  const [asc, setAsc] = useState([])
  const [dsc, setDsc] = useState([])
  const [selectedOption, setSelectedOption] = useState("")
  //const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState("All Products")
  const [collections, setCollections] = useState([])
  const [name, setName] = useState("All")
  const [val, setVal] = useState("")
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    fetchDataFromApi("/api/categories").then((res) => {
      console.log(res)
      setCategories(res.data)
    })
  }

  const options = ["one", "two", "three"]
  const defaultOption = options[0]

  const tabOptions = [
    //{ label: "Swamiji Kirtans", value: "Swamiji Kirtans" },
    // { label: 'Option 2', value: 'option2' },
    // { label: 'Option 3', value: 'option3' },
  ]

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   window.scrollTo(0, 0);
  // };

  const handleClose = (event) => {
    setVal(val)
    if (val !== "") {
      dispatch(setValue(val))
    }
  }
  const handleDropdownChange = (event) => {
    window.scrollTo({ top: 2300, behavior: "smooth" })
    dispatch(setSortOrder(event.target.value))
    setVal(event.target.value)
    if (event.target.value === "All Products" || "") {
      setItem(items)
      setCategory("All Products")
      setHide(true)
    } else if (event.target.value === "SwamijiKirtans") {
      setItem(SwamijiKirtans)
      setCategory("Swamiji Kirtans")
      setHide(false)
    } else if (event.target.value === "EnglishLectures") {
      setItem(EnglishLectures)
      setCategory("English Lectures")
      setHide(false)
    } else if (event.target.value === "BalMukundBooks") {
      setItem(BalMukundBooks)
      setCategory("Bal Mukund Books")
      setHide(false)
    } else if (event.target.value === "englishbooks") {
      setItem(englishbooks)
      setCategory("English Books")
      setHide(false)
    } else if (event.target.value === "Videos") {
      setItem(Videos)
      setCategory("Videos")
      setHide(false)
    }
    // Do something with the selected value
  }

  // const handleBlur = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value,"ev")
  //   if(event.target.value === value){

  //   }
  //   else {
  //   handleDropdownChange(event);
  //   }
  // };
  const handleClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  console.log(name, "name")
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   dispatch(setValue("All"))

  // };
  async function getItems() {
    try {
      var headers = new Headers()
      headers.append(
        "Authorization",
        "Basic " +
        btoa(
          "ce9a3ad16708f3eb4795659e809971c4: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"
        )
      )
      //https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products
      // "http://localhost:5000/products.json?limit=250",

      const result = await fetch(
        "https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products",
        {
          headers: headers,
        }
      )

      const resp = await result.json()
      if (resp) {
        console.log(resp)
        setItem(resp?.products)
        dispatch(setItems(resp?.products))
        console.log(resp?.products, "res")
        let arr = resp?.products
        let arr2 = resp?.products
        arr = arr
          .slice()
          .sort((a, b) => a.variants[0].price - b.variants[0].price)
        arr2 = arr2
          .slice()
          .sort((a, b) => b.variants[0].price - a.variants[0].price)
        setAsc(arr)
        setDsc(arr2)
      }
    } catch (err) {
      console.log(err, "this is error")
    }
  }

  // async function getCollections() {
  //   var headers = new Headers();
  //   headers.append(
  //     "Authorization",
  //     "Basic " +
  //       btoa(
  //         "ce9a3ad16708f3eb4795659e809971c4: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"
  //       )
  //   );
  //   //https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products
  //   const result = await fetch(
  //     "http://localhost:5000/custom_collections.json",
  //     {
  //       headers: headers,
  //     }
  //   );
  //   const resp = await result.json();
  //   console.log(resp.custom_collections, "collections");

  //   setCollections(resp.custom_collections);

  //   // getSingleCollection(ids)
  // }

  useEffect(() => {
    getItems()
    getCategories()
    // getCollections();
  }, [])

  const handleChange = (event, value) => {
    dispatch(setSortOrder(value))
    window.scrollTo({ top: 2300, behavior: "smooth" })
    if (value === "All Products" || "") {
      setItem(items)
      setCategory("All Products")
      setHide(true)
    } else if (value === "SwamijiKirtans") {
      setItem(SwamijiKirtans)
      setCategory("Swamiji Kirtans")
      setHide(false)
    } else if (value === "EnglishLectures") {
      setItem(EnglishLectures)
      setCategory("English Lectures")
      setHide(false)
    } else if (value === "BalMukundBooks") {
      setItem(BalMukundBooks)
      setCategory("Bal Mukund Books")
      setHide(false)
    } else if (value === "englishbooks") {
      setItem(englishbooks)
      setCategory("English Books")
      setHide(false)
    } else if (value === "Videos") {
      setItem(Videos)
      setCategory("Videos")
      setHide(false)
    }
  }
  // dispatch(setValue(newValue));

  const handlePriceFilter = (priceFilter) => {
    const filtered = asc.filter(
      (product) =>
        (priceFilter.minPrice === "" ||
          product.variants[0].price >= priceFilter.minPrice) &&
        (priceFilter.maxPrice === "" ||
          product.variants[0].price <= priceFilter.maxPrice)
    )
    if (priceFilter.minPrice === 3 && priceFilter.maxPrice === 150) {
      setHide(true)
    } else {
      setHide(false)
    }
    //setFilteredProducts(filtered);
    setItem(filtered)
  }

  useMemo(() => {
    const filtered = items.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    setItem(filtered)
  }, [items, search])

  const handleSearchField = (e) => {
    setSearchField(e.target.value)
    window.scrollTo({ top: 2300, behavior: "smooth" })
    setHide(false)
    setCategory("Products")
    if (e.target.value === "") {
      setHide(true)
      getItems()
    }
  }

  // const handleSearchField = (e) => {
  //   const filtered = items.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setItem(filtered);
  //   setHide(false);
  //   setCategory("Products");
  //   if (e.target.value === "") {
  //     setHide(true);
  //     getItems();
  //   }
  // };

  var fruitArrays = {}
  console.log(categories)
  if (categories) {
    for (var i = 0; i < categories.length; i++) {
      const a = items.filter(
        (item) => item.tags === categories[i].attributes.Type
      )
      fruitArrays[categories[i].attributes.Type] = [a]
    }
  }

  const englishbooks = items.filter((item) => item.tags === "English Books")
  const newArrivalsItems = items.filter((item) => item.tags === "POS")
  const bestSellersItems = items.filter((item) => item.tags === "")
  const SwamijiKirtans = items.filter((item) => item.tags === "Swamiji Kirtans")
  const BalMukundBooks = items.filter((item) => item.tags === "BalMukund Books")
  const EnglishLectures = items.filter(
    (item) => item.tags === "English Lectures-Swamiji (Audio)"
  )
  const Videos = items.filter((item) => item.tags === "Videos")

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    // width: "90%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
  }

  const change = () => {
    dispatch(setValue("All"))
    window.scrollTo(0, 0)
  }

  const handleSortOrderChange = (value) => {
    if (value === "asc") {
      setItem(asc)
      setHide(false)
    }
    if (value === "desc") {
      setItem(dsc)
      setHide(false)
    }
  }

  const handleCategoriesChange = (value) => {
    if (value in fruitArrays) {
      setItem(fruitArrays[value][0])
      setCategory(value)
      setHide(false)
    }
    // if (value === "All Products" || "") {
    //   setItem(items);
    //   setCategory("All Products");
    //   setHide(true);
    // }
    // else if (value === "SwamijiKirtans") {
    //   setItem(SwamijiKirtans);
    //   setCategory("Swamiji Kirtans");
    //   setHide(false);
    // }
    //else if (value === "EnglishLectures") {
    //   setItem(EnglishLectures);
    //   setCategory("English Lectures");
    //   setHide(false);
    // } else if (value === "BalMukundBooks") {
    //   setItem(BalMukundBooks);
    //   setCategory("Bal Mukund Books");
    //   setHide(false);
    // } else if (value === "englishbooks") {
    //   setItem(englishbooks);
    //   setCategory("English Books");
    //   setHide(false);
    // } else if (value === "Videos") {
    //   setItem(Videos);
    //   setCategory("Videos");
    //   setHide(false);
    // }
  }

  const clearFilter = () => {
    dispatch(setPriceFilter([3, 150]))
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    }
    handlePriceFilter(priceFilter)
    handleCategoriesChange("All Products")
    //dispatch(setIsFilterOpen({}))
    dispatch(setSortOrder(""))
  }

  const clearMobFilter = () => {
    dispatch(setPriceFilter([3, 150]))
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    }
    handlePriceFilter(priceFilter)
    handleCategoriesChange("All Products")
    dispatch(setIsFilterOpen({}))
    dispatch(setSortOrder(""))
  }

  //   const styles = theme => ({
  //     select: {
  //         '&:before': {
  //             borderColor: "",
  //         },
  //         '&:after': {
  //             borderColor: "",
  //         }
  //     },
  //     icon: {
  //         right:"0px",
  //         background:"red"
  //     },
  // });

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
  }))
  const classes = styles()
  return (
    // <Slider {...settings}>
    <Fragment>
      <Box >
        <Box
          display={isFilterOpen ? "block" : "none"}
          // backgroundColor="rgba(0, 0, 0, 0.4)"
          position="absolute"
          zIndex={10}
          width="30%"
          height="30%"
          left="0"
          top="0"
          overflow="auto"
        >
          <Box
            position="fixed"
            left="0"
            bottom="0"
            width="max(400px, 30%)"
            height="100%"
            backgroundColor="#e4e4e4"
          >
            <Box padding="30px" overflow="auto" height="100%">
              <IconButton
                onClick={() => dispatch(setIsFilterOpen({}))}
                sx={{ marginBottom: "2em", marginRight: "50px" }}
              >
                <CancelIcon fontSize="large" />
              </IconButton>
              <Box
                className="filter-sidebar"
                sx={{ width: "300px", border: "" }}
              >
                <PriceFilter onPriceChange={handlePriceFilter} />
                <div>
                  <SortRadioButtons
                    onChange={handleSortOrderChange}
                    value={sortOrder}
                  />
                  {/*    
                  
                <CategoriesButton
                    onChange={handleCategoriesChange}
                    value={sortOrder}
                  />*/}

                  <Button
                    onClick={
                      breakPoint2 ? () => clearMobFilter() : () => clearFilter()
                    }
                    variant="contained"
                    //color="secondary"
                    sx={{
                      marginLeft: "0em",
                      fontWeight: "bold",
                      fontSize: "1em",
                      padding: "1em",
                      marginBottom: breakPoint2 ? "3em" : "1em",
                      fontFamily: "Rubik",
                    }}
                  >
                    <strong> Clear</strong>
                  </Button>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="offersavailable">
          <Papers />
        </Box>
        <Navbar expand="lg" className="navbox">
          <div className="navbars">
            <Navbar.Brand href="#home"> <img
              src={Jklog}
              alt="not found"
              style={{ width: "10rem", height: "100%", cursor: "pointer" }}
              onClick={() => change()}
            /></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="nav-item">HOME</Nav.Link>
                <NavDropdown title="KIRTANS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Swamiji Kirtans</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BOOKS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">English Books</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BalMukund Books</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="AUDIOS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">English Lectures</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="VIDEOS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
            <Box
              //columnGap="20px",
              display="flex"
              justifyContent="space-between"
              columnGap="0px"
              zIndex="2"
            >
              <div className="Search">
                <input
                  placeholder="Search for Products..."
                  type="text"
                  value={search} onChange={handleSearchField}
                />

                <IconButton  >

                  <SearchOutlined
                    fontSize="medium"
                    sx={{ color: " #ff6d31;" }}

                  />

                </IconButton>
              </div>
              <IconButton className="Searchmb">

                <SearchOutlined
                  fontSize="medium"
                  sx={{ color: "#fff" }}
                  onClick={() => setShow(!show)}

                />


              </IconButton>

              <Badge
                badgeContent={cart.length}
                color="secondary"
                invisible={cart.length === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 9,
                    top: 5,
                    padding: "0 4px",
                    height: "14px",
                    minWidth: "13px",
                  },
                }}
              >
                <IconButton
                  onClick={() => dispatch(setIsCartOpen({}))}
                  sx={{ color: "#FFFFFF" }}
                >
                  <ShoppingBagOutlined />
                </IconButton>
              </Badge>
              <IconButton
                aria-controls="basic-navbar-nav"
                onClick={() => dispatch(setIsNavOpen({}))}
                sx={{ color: "#FFFFFF" }}
                className="menub"
              >
                <MenuOutlined />
              </IconButton>

            </Box>


          </div>

        </Navbar>
        <div className="container boxess"  >
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
                <h2 className="trending"> TRENDING </h2>
              </Typography>
              <Slider {...settings}>
                {/**Jyoti working on Trending */}
                {newArrivalsItems.map((item) => (
                  <Item2 item={item} key={`${item.title}-${item.id}`} />
                ))}
              </Slider>{" "}
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
                <h2 className="bestsellers">BEST SELLERS</h2>
              </Typography>
              {SwamijiKirtans?.length > 3 ? (
                <Slider {...settings}>
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
                  {bestSellersItems.map((item) => (
                    <Fragment>
                      <Item2 item={item} key={`${item.title}-${item.id}`} />
                    </Fragment>
                  ))}
                </Box>
              )}
            </Fragment>
          ) : (
            ""
          )}

          {value === "All" ? (
            <Typography
              fontSize="40px"
              textAlign="center"
              color="#ff6d31"
              padding="50px "
              fontFamily="HeuristicaRegular"
            //color="#ff6d31"
            >
              <b>{category} </b>
            </Typography>
          ) : (
            <Typography
              variant="h1"
              textAlign="center"
              padding="50px "
              marginTop="38px"
              fontFamily="HeuristicaRegular"
            //color="#ff6d31"
            >
              <b>{value}</b>
            </Typography>
          )}

          {/* <Button variant="outlined" sx={{marginLeft:"2em",marginTop:"0em"}} onClick={clear}> Clear Filter</Button> */}

          <Box
            display={breakPoint2 && value === "All" ? "flex" : "none"}
            alignContent={"flex-end"}
            sx={{
              height: "32px",
              padding: "8px",
              borderRadius: "8px",
              background: "#ffdd93",
            }}
          >
            <Button onClick={() => dispatch(setIsFilterOpen({}))}>
              <TuneIcon
                sx={{ cursor: "pointer", width: "40%" }}
                fontSize="large"
              />
              <Typography variant="h3" fontWeight="bold">
                {" "}
                Filters
              </Typography>
            </Button>
          </Box>
          {/* <Button onClick={() => dispatch(setIsFilterOpen({}))}> Filter</Button> */}

          <Box display="flex">
            <Box
              className="filter-sidebar"
              sx={{
                width: "300px",
                border: "1px solid #ccc",
                display: breakPoint2 ? "none" : "",
                marginLeft: "2em",
                padding: "1em",
                height: "fit-content",
              }}
            >
              <PriceFilter onPriceChange={handlePriceFilter} />
              <div>
                <SortRadioButtons
                  onChange={handleSortOrderChange}
                  value={sortOrder}
                />
                <CategoriesButton
                  onChange={handleCategoriesChange}
                  value={sortOrder}
                />

                {/* render the sorted list */}
                {/* <Box
                  display="flex"
                  marginRight="0rem"
                  flexDirection={"column"}
                  width="100%"
                  sx={{ overflowX: "scroll" }}
                >
                  {collections.map((i) => (
                    <Button
                      key={i.id}
                      onClick={() => {
                        navigate(`collection/${i.id}`);
                      }}
                      variant="contained"
                      sx={{ background: "#ff6d2f", margin: "1rem" }}
                    >
                      {" "}
                      {i.title}{" "}
                    </Button>
                  ))}
                </Box> */}
                <Button
                  onClick={() => clearFilter()}
                  variant="contained"
                  // color="primary"
                  sx={{
                    marginLeft: "0em",
                    fontWeight: "bold",
                    fontSize: "1em",
                    padding: "1em",
                    marginBottom: breakPoint2 ? "3em" : "1em",
                    fontFamily: "Rubik",
                    background: "#ff6d2f",
                  }}
                >
                  <strong> Clear Filter</strong>
                </Button>
              </div>
            </Box>

            <Box
              width={breakPoint2 ? "100%" : "70%"}
              margin="20px auto"
              display="grid"
              gridTemplateColumns={
                breakPoint
                  ? "repeat(auto-fill, 125px)"
                  : "repeat(auto-fill, 200px)"
              }
              justifyContent="space-around"
              rowGap="80px"
              columnGap="3.33%"
            >
              {value === "All" &&
                (hide
                  ? view
                    ? item
                      .slice(0, 10)
                      .map((item) => (
                        <Item item={item} key={`${item.title}-${item.id}`} />
                      ))
                    : item
                      .slice(11, item.length)
                      .map((item) => (
                        <Item item={item} key={`${item.title}-${item.id}`} />
                      ))
                  : item.map((item) => (
                    <Item item={item} key={`${item.title}-${item.id}`} />
                  )))}
              {value === "Trending" &&
                newArrivalsItems.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}
              {value === "Best Sellers" &&
                bestSellersItems.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}
              {value === "English Books" &&
                englishbooks.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}

              {value === "Bal Mukund Books" &&
                BalMukundBooks.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}
              {value === "English Lectures" &&
                EnglishLectures.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}

              {value === "Swamiji Kirtans" &&
                SwamijiKirtans.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}
              {value === "Videos" &&
                Videos.map((item) => (
                  <Item item={item} key={`${item.title}-${item.id}`} />
                ))}
            </Box>
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                display: hide && value === "All" ? "" : "none",
                fontWeight: "bold",
                fontSize: "1rem",
                background: "#ff6d31",
              }}
              onClick={() => setView(!view)}
              variant={"contained"}
            >
              SHOW {view ? "ALL" : "LESS"}{" "}
              {view ? (
                <KeyboardDoubleArrowDownIcon />
              ) : (
                <KeyboardDoubleArrowUpIcon />
              )}
            </Button></div>
        </div>
      </Box>
      {show && <div className="searchbox">
        <div className="">  <IconButton  >

          <SearchOutlined
            fontSize="medium"
            sx={{ color: " #ff6d31;" }}

          />

        </IconButton> <input
            placeholder="Search for Products..."
            type="text"
            value={search} onChange={handleSearchField}
          />


          <IconButton onClick={() => setShow(false)} style={{ position: "absolute", right: 0, color: "#ff6d31" }} >
            <CancelIcon />
          </IconButton></div>

      </div>}
      <Box
        display="flex"
        justifyContent={"flex-end"}
        marginRight="20rem"
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
  )
}

export default Navbars