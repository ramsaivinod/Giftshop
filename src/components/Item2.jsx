import "../styles/item.scss";
import "./ItemDetails";
import "../styles/Item2.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { enqueueSnackbar } from "notistack";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { addToCart, setDisplay, setItem } from "../state";
import { PRODUCT } from "../utils/constants";

const Item2 = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const breakPoint = useMediaQuery("(min-width:700px)");
  const breakPoint3 = useMediaQuery("(max-width:700px)");
  const display = useSelector((state) => state.cart.quickDisplay);
  const [isLiked, setIsLiked] = useState(true);

  const handleIconClick = () => {
    setIsLiked(!isLiked);
  };

  const {
    palette: { neutral },
  } = useTheme();

  const { variants, title } = item;

  const addtocart = () => {
    if (count <= 0) {
      // Validation: Ensure that the count is greater than 0 before adding to cart.
      console.error("Invalid count: Count must be greater than 0");
      return; // Do not add to cart if count is invalid
    }

    dispatch(addToCart({ item: { ...item, count } }));
    enqueueSnackbar("Added to Cart!");
    console.log("snackbar");
  };

  return (
    <Box
      position="relative"
      style={{
        transform: isHovered ? "translate3d(0, 0, -10px)" : "",
        boxShadow: isHovered ? "0 10px 20px rgba(0, 0, 0, 0.2)" : "",
        cursor: "pointer",
      }}
      className="image_jk"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Box
        mb={"3px"}
        padding={"10px"}
        className="product"
        sx={{
          borderRadius: "20px",
          padding: breakPoint ? "2px" : "2px",
          marginBottom: "1px",
        }}
      >
        <div className="product_list">
          {item.image && (
            <img
              className="product_img"
              alt={item.name}
              width="30px"
              height="50px"
              src={item.image.src}
              onClick={() => navigate(`/item/${item.id}`)}
            />
          )}
        </div>

        <Box
          display={isHovered ? "block" : "none"}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "-40px",
          }}
        >
          <Box
            display={breakPoint3 ? "none" : "flex"}
            justifyContent="space-between"
            flexDirection={"column"}
            style={{
              margin: "1px",
              padding: "0px 25px",
              width: "10em",
            }}
          >
            <Button
              id="myBtn"
              sx={{
                color: "whitesmoke",
                borderRadius: "50%",
                backgroundColor: "#EF6F1F",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                "&:hover": {
                  backgroundColor: "#EF6F1F",
                },
              }}
            >
              <IconButton style={{ widht: "40px", height: "40px" }}>
                {isLiked ? (
                  <FavoriteBorderOutlinedIcon
                    fontSize="medium"
                    onClick={handleIconClick}
                    style={{
                      transform: "scale(1.3)",
                      color: "whitesmoke",
                    }}
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
                backgroundColor: "#EF6F1F",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#EF6F1F",
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
                dispatch(setDisplay(!display));
                dispatch(setItem(item));
              }}
              sx={{
                color: "whitesmoke",
                borderRadius: "100%",
                backgroundColor: "#EF6F1F",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                "&:hover": {
                  backgroundColor: "#EF6F1F",
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

      <Box mt="3px">
        <Typography
          id="typo"
          className="product_title"
        >
          {title}
        </Typography>
        <Typography
          textAlign={"left"}
          fontWeight="bold"
          fontSize="16px"
          color={"green"}
          style={{ marginLeft: "5px" }}
        >
          $ {variants[0].price}
        </Typography>
        <button className="addtocart" onClick={() => addtocart()}>
          {PRODUCT.ADD_TO_CART}
        </button>
      </Box>
    </Box>
  );
};

export default Item2;
