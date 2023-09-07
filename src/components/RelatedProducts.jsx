import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart ,setItem ,setDisplay} from "../state";
import { useNavigate } from "react-router-dom";
//import { AddBoxTwoTone, MenuOutlined } from "@mui/icons-material";
//import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import { Link } from "react-router-dom";
import "../App.css";
//import Jklog from "../logo/jklogo.png";
import "./product.scss";
import "./ItemDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { enqueueSnackbar } from "notistack";
// import { width } from "@mui/system";

const RelatedProducts = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const breakPoint = useMediaQuery("(min-width:700px)");
  const breakPoint2 = useMediaQuery("(min-width:300px)");
  const breakPoint3 = useMediaQuery("(max-width:700px)");
  const [isLiked, setIsLiked] = useState(true);

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };
  const {
    palette: { neutral },
  } = useTheme();

  const { variants, title } = item;
//  var modal = document.getElementById("myModal");

  // window.onclick = function (event) {
  //   // console.log(event.target)
  //   if (event.target == modal) {
  //     setDisplay(!display);
  //     // modal.style.display = "none";
  //   }
  // };

  // const close = () => {
  //   modal.style.display = "none";
  // };

  const addtocart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
    enqueueSnackbar("Added to Cart!");
    console.log("snackbar");
  };
  return (
    <Box className="container" position="relative">
      <Box
        mb={"3px"}
        padding={"10px"}
        className="product"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={{
          borderRadius: "20px",
          padding: "2px",
          marginBottom: "1px",
          //clipPath: "circle(150px at 80% 20%)";
          // clipPath:"circle(150px at 80% 20%)",
        }}
      >
        <Box>
          {display ? (
            <div id="myModal" className="modal" style={{ display: "block" }}>
              <div className="modal-content">
                <span className="close" onClick={() => setDisplay(!display)}>
                  &times;
                </span>
                <Box display="flex" flexWrap="wrap" columnGap="10px">
                  {/* IMAGES */}

                  <Box flex="1 1 40%" mb="10px">
                    <img
                      alt={item?.title}
                      width="80%"
                      height="79%"
                      src={item.image?.src}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* ACTIONS */}
                  <Box flex="1 1 50%" mb="10px">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      fontSize="16px"
                    ></Box>

                    <Box m="65px 0 25px 0">
                      <Typography
                        variant="h2"
                        style={{ textDecorationLine: "underline" }}
                      >
                        {item?.title}
                        
                      </Typography>

                      <Typography
                        style={{
                          fontFamily: "'Shantell Sans', cursive",
                        }}
                        sx={{ mt: "20px" }}
                        fontSize="16px"
                        dangerouslySetInnerHTML={{
                          __html: item.body_html,
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
                      >
                        <IconButton
                          onClick={() => setCount(Math.max(count - 1, 0))}
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
                          backgroundColor: "#222222",
                          color: "white",
                          borderRadius: 0,
                          minWidth: "150px",
                          padding: "10px 40px",
                        }}
                        onClick={() => addtocart()}
                      >
                        ADD TO CART
                      </Button>
                    </Box>
                    <Box>
                      <Box m="20px 0 5px 0" display="flex">
                        <FavoriteBorderOutlinedIcon />
                        <Typography sx={{ ml: "5px" }} fontSize="11px">
                          ADD TO WISHLIST
                        </Typography>
                      </Box>
                      <Typography fontSize="16px">
                        CATEGORIES: {item.tags}
                      </Typography>
                      <Typography alignItems="flex-end" fontSize="16px">
                        PRICE - ${item?.variants[0].price}
                      </Typography>

                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          ) : (
            ""
          )}
        </Box>
        {/* 340,400 */}
        <div className="product_list">
          <img
            className="product_img"
            alt={item.name}
            width="30px"
            height="50px"
            src={item.image?.src}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{
              opacity: isHovered ? 0.6 : 1,
              cursor: "pointer",
              position: "relative",
              width: breakPoint ? "220px" : breakPoint2 ? "180px" : "100px",
              height: breakPoint ? "270px" : breakPoint2 ? "220px" : "140px",
              /* background: #232323; */
              borderRadius: "20px",
              objectFit: "contain",
              // boxShadow: "29px 13px 70px 13px rgb(0 36 0 / 52%)",
            }}
          />{" "}
        </div>

        <Box
          display={isHovered ? "block" : "none"}
          style={{cursor:"pointer"}}
          position="absolute"
          bottom="73%"
          left="14%" //-43% //-27%
          width="0%"
          padding="0 100px"
        >
          <Box
            display={breakPoint3 ? "none" : "flex"}
            justifyContent="space-between"
            flexDirection={"column"}
            style={{
              margin: "1px",
              padding: "0px 25px",
              // border: "2px solid green",
              width: "10em",
            }}
          >
            <Button
              id="myBtn"
              sx={{
                // background: "linear-gradient(95deg, rgba(230,114,20,1) 0%, rgba(232,171,14,1) 66%, rgba(233,222,192,1) 94%)",
                // fontWeight: "bolder",
                // fontSize: "medium",
                color: "whitesmoke",
                borderRadius: "100%",
                backgroundColor: "#ff6d31",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                marginBottom: "10px",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#ff6d31",
                },
              }}
            >
              <IconButton style={{ widht: "30px", height: "40px" }}>
                {isLiked ? (
                  <FavoriteBorderOutlinedIcon
                    fontSize="medium"
                    onClick={handleIconClick}
                    style={{ transform: "scale(1.3)", color: "whitesmoke" }}
                  />
                ) : (
                  <FavoriteOutlinedIcon
                    fontSize="medium"
                    onClick={handleIconClick}
                  />
                )}
              </IconButton>
            </Button>
            <Button
               id="myBtn"
              onClick={() => {
                addtocart();
              }}
              sx={{
                color: "whitesmoke",
                borderRadius: "100%",
                backgroundColor: "#ff6d31",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                marginBottom: "10px",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#ff6d31",
                },
              }}
            >
              <IconButton style={{ widht: "30px", height: "40px" }}>
                {" "}
                <ShoppingCartOutlinedIcon
                  fontSize="medium"
                  style={{ transform: "scale(1.3)", color: "whitesmoke" }}
                />
              </IconButton>
            </Button>
            {/* <Button
              id="myBtn"
              onClick={() => {
                dispatch(setDisplay(!display));
                dispatch(setItem(item));
              }}
              sx={{
                // background: "linear-gradient(95deg, rgba(230,114,20,1) 0%, rgba(232,171,14,1) 66%, rgba(233,222,192,1) 94%)",
                // fontWeight: "bolder",
                // fontSize: "medium",
                color: "whitesmoke",
                borderRadius: "100%",
                backgroundColor: "#ff6d31",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#ff6d31",
                },
              }}
            >
              <IconButton style={{ widht: "2px", height: "40px" }}>
                <RemoveRedEyeOutlinedIcon
                  fontSize="medium"
                  sx={{ transform: "scale(1.3)", color: "whitesmoke" }}
                />
              </IconButton>
            </Button> */}

            {/* <Box
              className="box1"
              display="flex"
              alignItems="center"
              backgroundColor="#ff6d31"
              borderRadius="3px"
            >
              <IconButton
                onClick={() => setCount(Math.max(count - 1, 1))}
                color={shades.primary[900]}
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[900]}>
                <b> {count}</b>
              </Typography>
              <IconButton
                onClick={() => setCount(count + 1)}
                color={shades.primary[900]}
              >
                <AddIcon />
              </IconButton>
              <IconButton sx={{ color: "black" }}>
              <MenuOutlined />
            </IconButton>
            </Box> */}
          </Box>
        </Box>
      </Box>

      {/* <Button
        id="myBtn"
        onClick={() => setDisplay(!display)}
        style={{
          backgroundImage:
            "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)",
        }}
      >
        Quick View
      </Button> */}

<Box mt="3px">
        {/* <Typography variant="subtitle2" color={neutral.dark} fontSize="16px">
          {tags
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography> */}
        <Typography
          fontSize="20px"
          fontFamily={"Lora"}
          sx={{ wordWrap: "break-word" }}
        >
          {/* {title.length > 26 ? (
            <b>
              {" "}
              {title.slice(0, 22)}
              <br /> - {title.slice(22, title.length)}
            </b>
          ) : ( */}
          <b> {title}</b>
          {/* )} */}
          {/* <b> {title}</b>  */}
        </Typography>
        <Typography fontWeight="bold" fontSize="16px" color={"green"}>
          ${variants[0].price}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#F24E1E",
            color: "white",
            borderRadius: 0,
            minWidth: "150px",
            padding: "10px 40px",
            borderRadius: "44.3862px",
            "&:hover": {
              //you want this to be the same as the backgroundColor above
              backgroundColor: "#F24E1E",
            },
          }}
          onClick={() => addtocart()}
        >
          ADD TO CART
        </Button>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
