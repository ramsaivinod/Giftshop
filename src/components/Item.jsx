import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart, setItem } from "../state";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./product.scss";
import "./item.scss";
import "./ItemDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "tss-react/mui";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const [isLiked, setIsLiked] = useState(true);

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };
  const useStyles = makeStyles({ root: { backgroundColor: "red" } });
  const {
    palette: { neutral },
  } = useTheme();

  const { variants, title } = item;
  var modal = document.getElementById("myModal");



  window.onclick = function (event) {
    // console.log(event.target)
    if (event.target == modal) {
      setDisplay(!display);
      // modal.style.display = "none";
    }
  };

  const donothing = () => { };

  const addtocart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
    enqueueSnackbar("Added to Cart!");
    console.log("snackbar");
  };
  return (
    <Box className="containers" position="relative"  >
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

                  <Box flex="1 1 10%" mb={breakPoint ? "" : "10px"}>
                    <img
                      alt={item?.title}
                      width={breakPoint ? "30%" : "100%"}
                      height="auto"
                      style={{ marginTop: "4em" }}
                      src={item.image?.src}
                    //style={{ objectFit: "contain" }}
                    />

                    {/* <Box  display="flex">

</Box> */}

                    <Typography
                      m="20px 0 5px 0"
                      alignItems="flex-end"
                      fontSize={breakPoint ? "12px" : "24px"}
                      fontFamily={"Rubik"}
                    >
                      PRICE -{" "}
                      <b style={{ color: "green" }}>
                        ${item?.variants[0].price}
                      </b>
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
                          paddingLeft: "20px",
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
                    <Typography
                      fontSize={breakPoint ? "12px" : "16px"}
                      fontFamily={"Rubik"}
                    >
                      TAGS: <strong> {item.tags}</strong>
                    </Typography>
                    <Box>
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
        <div className="product_list" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            className="product_imgs"
            alt={item.name}
            width="30px"
            height="50px"
            src={item.image?.src}
            //src={isHovered && item.images.length > 1 ? (item.images[1].src) : (item.image?.src)}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{
              opacity: isHovered ? 0.6 : 1,
              cursor: "pointer",
              position: "relative",
              width: breakPoint ? "140px" : "220px",
              height: breakPoint ? "200px" : "280px",
              /* background: #232323; */
              // borderRadius: "20px",
              objectFit: "contain",
              // boxShadow: "29px 13px 70px 13px rgb(0 36 0 / 52%)",
              overflow: "hidden",
              //  transition: isHovered ? "all 0.3s ease 0s":"",
              transition: "background-image 1s ease",
            }}
          />{" "}
        </div>

        <Box
          display={isHovered ? "block" : "none"}
          style={{ cursor: "pointer" }}
          position="absolute"
          bottom="65%"
          left="74%" //-43% //-27%
          width="0%"
          padding="0 0px"
        >
          <Box
            display={breakPoint ? "none" : "flex"}
            justifyContent="space-between"
            onClick={() => donothing}
            flexDirection={"column"}
            style={{
              margin: "0px",
              padding: "0px 0px",
              // border: "2px solid green",
              width: "0em",
            }}
          >
            <Button
              id="myBtn"
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

            <Button
              id="myBtn"
              onClick={() => {
                setDisplay(!display);
              }}
              sx={{
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
            </Button>


          </Box>
        </Box>
      </Box>

      {/* <Button
        id="myBtn"
        onClick={() => setDisplay(!display)}
   
      >
        Quick View
      </Button> */}

      <Box mt="3px">
        <Typography fontSize="16px" fontFamily={"QuickSand"} height={"4.1rem"} overflow={"hidden"} style={{ lineHeight: "1.2", }}>
          {title}
        </Typography>
        <Typography fontWeight="bold" fontSize="16px" color={"green"} marginBottom={".51rem"}>
          ${variants[0].price}
        </Typography>
        <div style={{ width: "100%" }}>
          <Button style={{ width: "100%" }}
            sx={{
              backgroundColor: "#F24E1E",
              marginTop: "0px",
              color: "white",
              borderRadius: 0,

              padding: "10px 20px",
              //borderRadius: "44.3862px",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "#F24E1E",
              },
            }}
            onClick={() => addtocart()}
          >
            ADD TO CART
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Item;
