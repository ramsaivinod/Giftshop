import {
  Box,
  Button,
  Select,
  IconButton,
  Typography,
  Badge,
  FormControl,
  InputLabel,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart, setIsNavOpen, setValue } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { encode as btoa } from "base-64";
import Item from "./Item";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../state";
// import { Link } from "react-router-dom";
import Jklog from "../logo/jklogo.png";
import Slider from "react-slick";
import RelatedProducts from "./RelatedProducts";
import SideBar from "./SideBar";
import "../styles/ItemDetails.css";
import ReactMagnifier from "@sandeepv68/react-magnifier";
import "../styles/Navbar.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { SearchOutlined } from "@mui/icons-material"
import CancelIcon from "@mui/icons-material/Cancel"
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { FaStar } from "react-icons/fa";
import { setReviewed } from "../state";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactImageGallery from "react-image-gallery";
import Zoom from "react-img-hover-zoom";
import MyImage from "./MyImage";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavMenu from "./NavMenu";
import Item2 from "./Item2";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ItemDetails = () => {
  const breakPoint = useMediaQuery("(min-width:400px)");
  const breakPoint2 = useMediaQuery("(max-width:700px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  //const { itemId } = useParams();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState([]);
  //   const [items, setItems] = useState([]);
  const [i, setId] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  //   const breakPoint = useMediaQuery("(max-width:700px)");
  //   const breakPoint2 = useMediaQuery("(max-width:1000px)");
  const value = useSelector((state) => state.cart.value);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false)
  const [search, setSearchField] = useState("")

  const handleChange = (event, newValue) => {
    dispatch(setValue(newValue));
    window.scrollTo(0, 0);
    navigate("/");
  };

  //   const handleClick = (id) => {
  //     dispatch(addToCart({ item: { ...updateditem, count } }))
  //     dispatch(rateProduct( {itemed : { productId:id, rating:currentValue, items:item }}));
  // const resp = item.filter((i)=> (i.id === id))
  // dispatch(setReviewed(resp));

  //   }

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
    navigate("/");
    window.scrollTo(0, 0);
    setVal(event.target.value);
    dispatch(setValue(event.target.value));
    // Do something with the selected value
  };
  const handleClose = (event) => {
    //console.log(event.target.value, "val");
    console.log(val, "value");
    setVal(val);
    if (val !== "") {
      dispatch(setValue(val));
    }
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // const handleRatingChange = (value) => {
  //   dispatch(rateProduct({ productId: updateditem.id, rating: setCurrentValue(value)}));
  // };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const {
  //   palette: { neutral },
  // } = useTheme();

  const getData = async () => {
    try {
      navigate(`/item/${params.itemId}`);
      setId(params.itemId);

      if (
        updateditem.tags === "POS" ||
        updateditem.tags === "" ||
        updateditem.tags === undefined
      ) {
        dispatch(setValue("All"));
      } else {
        dispatch(setValue(updateditem[0].tags));
      }

      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err, "this is error");
    }
  };

  const updateditem = item.filter((d) => {
    // eslint-disable-next-line
    return d.id == i;
  });

  if (updateditem) {
    if (
      updateditem[0]?.tags === "POS" ||
      updateditem[0]?.tags === "" ||
      updateditem[0]?.tags === undefined
    ) {
      dispatch(setValue("All"));
    } else if (updateditem[0].tags === "English Lectures-Swamiji (Audio)") {
      dispatch(setValue("English Lectures"));
    } else if (updateditem[0].tags === "BalMukund Books") {
      dispatch(setValue("Bal Mukund Books"));
    } else if (updateditem[0].tags === "Videos") {
      dispatch(setValue("Videos"));
    } else {
      dispatch(setValue(updateditem[0].tags));
    }
  }
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

  useEffect(() => {
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
        //"https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products",
        //"http://localhost:5000/products.json?limit=250",
        const result = await fetch(
          "https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products",
          {
            headers: headers,
          }
        );

        const itemJson = await result.json();
        //console.log(itemJson);
        setItem(itemJson.products);
        setLoading(false);
      } catch (err) {
        console.log(err, "this is error");
      }
    }
    getData();
    getItems();
    // eslint-disable-next-line
  }, [params.itemId]);

  const images = [
    {
      original: updateditem.image?.src,
      thumbnail: updateditem.image?.src,
    },
    {
      original: updateditem.image?.src,
      thumbnail: updateditem.image?.src,
    },
    {
      original: updateditem.image?.src,
      thumbnail: updateditem.image?.src,
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {updateditem.map((updateditem, index) => (
            <Box width="100%" m="80px auto" key={updateditem.id} className="">

      
              <NavMenu navFromTop={true} />
              <div className="container">  <Box display="flex" flexWrap="wrap" columnGap="40px">
                {/* IMAGES */}

                <Box flex="1 1 40%" mb="40px">
                  {/* <Zoom
                    width={300}
                    zoomScale={3}
                    height={500}
                    img={updateditem.image?.src}
                    style={{ objectFit: "contain", marginLet: "3%",cursor:"zoom-in",backgroundPosition:"left center" }}
                  /> */}
                  <MyImage imgs={updateditem.images} />

                  <Typography
                    m="20px 0 5px 0"
                    alignItems="flex-end"
                    fontSize={!breakPoint ? "12px" : "22px"}
                    fontFamily={"Rubik"}
                  >
                    PRICE -{" "}
                    <strong style={{ color: "green" }}>
                      ${updateditem?.variants[0].price}
                    </strong>
                  </Typography>

                  {/* <ImageGrid images={updateditem.images}/> */}
                  {/* 
<img
                    alt={updateditem?.title}Fbo
                    width="100%"
                    height="80%"
                    src={updateditem.image?.src}
                    style={{ objectFit: "contain" }}
                  /> */}
                </Box>

                {/* ACTIONS */}
                <Box flex="1 1 50%" mb="40px">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    fontSize="16px"
                  >
                    <Box mt="30px">
                      <Button
                        onClick={() => { navigate(`/`); dispatch(setValue('All')) }}
                        variant="contained"
                        sx={{ backgroundColor: "#ff6d2f" }}
                      >
                        {" "}
                        <ArrowBackIcon />
                      </Button>
                    </Box>
                    {/* <Box>Prev Next</Box> */}
                  </Box>

                  <Box m={!breakPoint ? "0px 0 0px 0" : "65px 0 25px 0"}>
                    <Typography
                      variant={!breakPoint ? "h5" : "h2"}
                      style={{ textDecorationLine: "underline" }}
                      fontFamily={"Lora"}
                    >
                      {updateditem?.title}
                    </Typography>

                    <Typography
                      sx={{ mt: "20px" }}
                      fontSize={!breakPoint ? "12px" : "20px"}
                      fontFamily="Rubik"
                      textAlign={breakPoint ? "left" : "center"}
                      dangerouslySetInnerHTML={{
                        __html: updateditem.body_html,
                      }}
                    >
                      {/* {item?.attributes?.longDescription} */}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" minHeight="50px">
                    <Box
                      display="flex"
                      alignItems="center"
                      border={`1.5px solid ${shades.neutral[300]}`}
                      mr="20px"
                      p="2px 5px"
                      backgroundColor={"#edaa38"}
                    >
                      <IconButton
                        onClick={() => {
                          if(count > 1){
                            setCount(Math.max(count - 1, 0));
                          }
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                      <IconButton onClick={() => setCount(count + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Button
                      sx={{
                        backgroundColor: "#cf4520",
                        // backgroundColor: "#222222",
                        color: "white",
                        borderRadius: 0,
                        fontFamily: "Rubik",
                        minWidth: !breakPoint ? "150px" : "100px",
                        padding: "10px 40px",
                        "&:hover": {
                          //you want this to be the same as the backgroundColor above
                          backgroundColor: "#222222",
                        },
                      }}
                      onClick={() =>
                        dispatch(addToCart({ item: { ...updateditem, count } }))
                      }
                    >
                      ADD TO CART
                    </Button>
                  </Box>

                  <Box
                    display={"flex"}
                    justifyContent={"end"}
                    mr={!breakPoint ? "20px" : "200px"}
                  >
                    {/* <Box m="20px 0 5px 0" display="flex">
                      <FavoriteBorderOutlinedIcon />
                      <Typography sx={{ ml: "5px" }} fontSize="11px">
                        ADD TO WISHLIST
                      </Typography>
                    </Box> */}

                    <Typography
                      fontSize={!breakPoint ? "12px" : "16px"}
                      fontFamily={"Rubik"}
                    // style={{ textDecorationLine: "underline" }}
                    >
                      TAGS: <strong> {updateditem.tags} </strong>
                    </Typography>
                  </Box>

                  {/* <Box > 
                <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(updateditem.id,setCurrentValue(index + 1))}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
                  </Box> */}
                </Box>
              </Box>

                {/* INFORMATION */}
                <Box m="20px 0">
                  {/* <Tabs value={value} onChange={handleChange}>
                  <Tab label="DESCRIPTION" value="description" />
                  <Tab label="REVIEWS" value="reviews" />
                </Tabs> */}
                </Box>

                <Box display="flex" flexWrap="wrap" gap="15px">
                  {/* {value === "description" && (
                  //   <div>{item?.attributes?.longDescription}</div>
                  )} */}

                  {/* {value === "reviews" && <div>reviews</div>} */}
                </Box>

                {/* RELATED ITEMS */}

                {/*    display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)"
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%" */}
                <Box mt="50px" mr="30px" width="100%">
                  <Typography variant="h2" fontWeight="bold" fontFamily={"Lora"}>
                    Related Products
                  </Typography>
                  <Slider {...settings} style={{margin: "0 15px"}}>
                    {item.filter(item=> item.tags === updateditem.tags).map((item, i) => (
                      <Item2 item={item} key={`${item.title}-${item.id}`} />
                    ))}
                  </Slider>{" "}
                </Box></div>
              {show && <div className="searchbox">
                <div className="">  <IconButton  >

                  <SearchOutlined
                    fontSize="medium"
                    sx={{ color: " #ff6d31;" }}

                  />

                </IconButton> <input
                    placeholder="Search for Products..."
                    type="text"
                    value={search}
                  />


                  <IconButton onClick={() => setShow(false)} style={{ position: "absolute", right: 0, color: "#ff6d31" }} >
                    <CancelIcon />
                  </IconButton></div>

              </div>}
            </Box>
          ))}
        </Fragment>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default ItemDetails;

//git config --global user.name "yogesh_jaiinfoway"
//git config --global user.email "yogesh@jaiinfoway.com"
