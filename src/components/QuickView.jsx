import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart, setDisplay } from "../state";
import { useNavigate } from "react-router-dom";
//import { AddBoxTwoTone, MenuOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import { Link } from "react-router-dom";
import "../App.css";
//import Jklog from "../logo/jklogo.png";
//import "./product.scss";
import "./item.scss";
import "./ItemDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { enqueueSnackbar } from "notistack";
import "./item.scss";

const QuickView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  // const [display, setDisplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const display = useSelector((state) => state.cart.quickDisplay);
  const item = useSelector((state) => state.cart.item);

  const {
    palette: { neutral },
  } = useTheme();

  const { variants, title } = item;
  var modal = document.getElementById("myModal");

  window.onclick = function (event) {
    // console.log(event.target)
    if (event.target == modal) {
      dispatch(setDisplay(!display));
      // modal.style.display = "none";
      console.log("hello");
    }
  };
  const addtocart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
    enqueueSnackbar("Added to Cart!");
    console.log("snackbar");
  };
  return (
    <Box>
      {display ? (
        <div id="myModal" className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <span
              className="close"
              onClick={() => dispatch(setDisplay(!display))}
            >
              &times;
            </span>
            <Box display="flex" flexWrap="wrap" columnGap="10px">
              {/* IMAGES */}

              <Box flex="1 1 10%" mb={breakPoint ? "" : "10px"} >
                <img
                  alt={item?.title}
                  width={breakPoint ? "30%" : "100%"}
                  height="auto"
                  style={{ marginTop: "4em" }}
                  src={item.image?.src}
                //style={{ objectFit: "contain" }}
                />

                <Typography
                  m="20px 0 5px 0"
                  alignItems="flex-end"
                  fontSize={breakPoint ? "12px" : "24px"}
                  fontFamily={"Rubik"}

                >
                  PRICE - <b style={{ color: "green" }}>${item?.variants[0].price}</b>
                </Typography>



              </Box>

              {/* ACTIONS */}
              <Box flex="1 1 50%" mb={breakPoint ? "0px" : "10px"}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  fontSize="16px"
                ></Box>

                <Box m={breakPoint ? "0px 0 0px 0" : "65px 0 25px 0"}>
                  <Typography
                    variant={breakPoint ? "h5" : "h2"}
                    style={{ textDecorationLine: "underline" }}
                    fontFamily={"Lora"}
                  >
                    {item?.title}
                  </Typography>

                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      paddingLeft: "20px"
                    }}
                    sx={{ mt: breakPoint ? "5px" : "20px", padding: "3px" }}
                    fontSize={breakPoint ? "12px" : "16px"}
                    textAlign={"left"}

                    dangerouslySetInnerHTML={{
                      __html: item.body_html,
                    }}
                  >
                    {/* {item?.attributes?.longDescription} */}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  minHeight={breakPoint ? "15px" : "50px"}
                >

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"flex-end"}
                    border={`1.5px solid ${shades.primary[500]}`}
                    backgroundColor={"#edaa38"}
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
                      backgroundColor: "#cf4520",
                      color: "white",
                      fontFamily: "Rubik",
                      borderRadius: 0,
                      minWidth: breakPoint ? "150px" : "100px",
                      padding: "10px 10px",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#222222",
                      },
                    }}
                    onClick={() => {
                      addtocart();
                    }}
                  >
                    <b>ADD TO CART</b>
                  </Button>
                </Box>
                <Typography fontSize={breakPoint ? "12px" : "16px"} fontFamily={"Rubik"}
                >
                  TAGS: <strong> {item.tags}</strong>
                </Typography>
                <Box>
                  {/* <Box m="20px 0 5px 0" display="flex">
                  <FavoriteBorderOutlinedIcon />
                  <Typography sx={{ ml: "5px" }} fontSize="11px">
                    ADD TO WISHLIST
                  </Typography>
                </Box> */}
                  {/* <Typography fontSize={breakPoint ? "12px" : "16px"} fontFamily={"Rubik"}>
                    CATEGORIES: <strong> {item.tags}</strong>
                  </Typography> */}
                  {/* <Typography
                  alignItems="flex-end"
                  fontSize={breakPoint ? "12px" : "16px"}
                >
                  PRICE - ${item?.variants[0].price}
                </Typography> */}
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      ) : (
        ""
      )}
    </Box>
  );
};

export default QuickView;
