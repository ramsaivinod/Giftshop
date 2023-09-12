import { useState, useCallback, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { shades } from "../theme"
import { addToCart, setDisplay, setItem } from "../state"
import { useNavigate } from "react-router-dom"
//import { AddBoxTwoTone, MenuOutlined } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import "../App.css"
//import Jklog from "../logo/jklogo.png";
//import "./product.scss";
import "./item.scss"
import "./ItemDetails"
import useMediaQuery from "@mui/material/useMediaQuery"
import QuickView from "./QuickView"
import { enqueueSnackbar } from "notistack"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { background } from "@chakra-ui/react"
import "../styles/Item2.css"
// import { width } from "@mui/system";

const Item2 = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  //const [display, setDisplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false)
  const breakPoint = useMediaQuery("(min-width:700px)")
  const breakPoint2 = useMediaQuery("(min-width:300px)")
  const breakPoint3 = useMediaQuery("(max-width:700px)")
  const display = useSelector((state) => state.cart.quickDisplay)
  const [isLiked, setIsLiked] = useState(true)

  const handleIconClick = () => {
    setIsLiked(!isLiked)
  }

  const {
    palette: { neutral },
  } = useTheme()

  const { variants, title } = item
  const addtocart = () => {
    dispatch(addToCart({ item: { ...item, count } }))
    enqueueSnackbar("Added to Cart!")
    console.log("snackbar")
  }
  return (
    <Box
      // className="container"
      position="relative"
      style={{
        transform: isHovered
          ? "translate3d(0, 0, -10px)"
          : "" /* Translate the image upwards */,
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
          //clipPath: "circle(150px at 80% 20%)";
          // clipPath:"circle(150px at 80% 20%)",
        }}
      >
        {/* 340,400 */}
        <div className="product_list">
          {item.image && (
            <img
              className="product_img"
              alt={item.name}
              width="30px"
              height="50px"
              src={item.image.src}
              onClick={() => navigate(`/item/${item.id}`)}
              style={
                {
                  //opacity: isHovered ? 0.6 : 1,
                  // cursor: "pointer",
                  // position: "relative",
                  // width: breakPoint ? "220px" : breakPoint2 ? "180px" : "100px",
                  // height: breakPoint ? "270px" : breakPoint2 ? "220px" : "140px",
                  // /* background: #232323; */
                  // borderRadius: "0px",
                  // objectFit: "contain",
                  // transition: "transform 0.5s ease-in-out",
                  // transformStyle: "preserve-3d",
                  // boxShadow: "29px 13px 70px 13px rgb(0 36 0 / 52%)",
                }
              }
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
        // position="absolute"
        // bottom="53%"
        // left="14%" //-43% //-27%
        // width="0%"
        // padding="0 100px"
        // cursor="pointer"
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
                color: "whitesmoke",
                borderRadius: "50%",
                backgroundColor: "#ff6d31",
                width: "10%",
                minWidth: "40px",
                height: "34px",
                "&:hover": {
                  backgroundColor: "#ff6d31",
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
                addtocart()
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
            <Button
              id="myBtn"
              onClick={() => {
                dispatch(setDisplay(!display))
                dispatch(setItem(item))
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

      <Box mt="3px">
        <Typography
          fontSize="14px"
          fontFamily={"QuickSand"}
          textAlign={"left"}
          sx={{ wordWrap: "break-word" }}
          className="product_title"
          style={{ marginLeft: "5px" }}
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
        <button
          className="addtocart"
          /*    sx={{
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
          }} */
          onClick={() => addtocart()}
        >
          ADD TO CART
        </button>
      </Box>
    </Box>
  )
}

export default Item2
