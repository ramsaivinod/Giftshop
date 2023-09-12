import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
//import { AddBoxTwoTone, MenuOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import { Link } from "react-router-dom";
import "../App.css";
//import Jklog from "../logo/jklogo.png";
import "./product.scss";
import "./ItemDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { width } from "@mui/system";
import { makeStyles } from "tss-react/mui";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const breakPoint = useMediaQuery("(max-width:700px)");

  const useStyles = makeStyles({ root: { backgroundColor: 'red' } });
  const {
    palette: { neutral },
  } = useTheme();

  const { variants, title } = item;
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks anywhere outside of the modal, close it
  
  
  window.onclick = function (event) {
    // console.log(event.target)
    if (event.target == modal) {
      setDisplay(!display);
      // modal.style.display = "none";
    }
  };

  // const close = () => {
  //   modal.style.display = "none";
  // };

  //

  const addtocart= ()=>{
    dispatch(addToCart({ item: { ...item, count } }))
  enqueueSnackbar('Added to Cart!')
  console.log("snackbar")
    
  }
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

                  <Box flex="1 1 40%" mb={breakPoint? "0px":"10px"}>
                    <img
                      alt={item?.title}
                      width={breakPoint? "40%":"80%"}
                      height="79%"
                      src={item.image?.src}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* ACTIONS */}
                  <Box flex="1 1 50%" mb={breakPoint? "0px":"10px"}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      fontSize="16px"
                    ></Box>

                    <Box m= {breakPoint? "0px 0 0px 0" :"65px 0 25px 0"}>
                      <Typography
                        variant={breakPoint?"h5":"h2"}
                        style={{ textDecorationLine: "underline" }}
                      >
                        {item?.title}
                      </Typography>

                      <Typography
                        style={{
                          fontFamily: "'Shantell Sans', cursive",
                        }}
                        sx={{ mt: breakPoint?"5px":"20px" }}
                        fontSize={breakPoint?"5px":"16px"}
                        dangerouslySetInnerHTML={{
                          __html: item.body_html,
                        }}
                      >
                        {/* {item?.attributes?.longDescription} */}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" minHeight="5px">
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
                          minWidth: "100px",
                          padding: "10px 10px",
                        }}
                        onClick={() => {
                          dispatch(addToCart({ item: { ...item, count } }))
                        }}
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
              cursor: "pointer",
              position: "relative",
              // width: breakPoint ? "140px" :"220px" ,
              height:breakPoint ? "200px" :"280px" ,
              /* background: #232323; */
              width: "100%",
              borderRadius: "20px",
              objectFit: "fill",
              boxShadow: "29px 13px 70px 13px rgb(0 36 0 / 52%)",
            }}
          />{" "}
        </div>

        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="30%"
          left="-33%"
          width="100%"
          padding="0 100px"
        >
          <Box
            display={breakPoint?"none":"flex"}
            justifyContent="space-between"
            style={{
              margin: "8px",
              padding: "5px 10px",
              // border: "2px solid green",
              width: "17em",
            }}
          >
            <Box
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
              {/* <IconButton sx={{ color: "black" }}>
              <MenuOutlined />
            </IconButton> */}
            </Box>
            <Button
              // <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
              //    
              onClick={() => {
                addtocart()
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" ,    "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: shades.primary[300]
            }}}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Button
        id="myBtn"
        onClick={() => setDisplay(!display)}
        style={{
          backgroundImage:
            "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)",
            fontWeight:"bolder",
            fontSize:"medium"
        }}
      >
        Quick View
      </Button>

      <Box mt="3px">
        {/* <Typography variant="subtitle2" color={neutral.dark} fontSize="16px">
          {tags
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography> */}
        <Typography fontSize="16px">
          <b> {title}</b>
        </Typography>
        <Typography fontWeight="bold" fontSize="16px">
          ${variants[0].price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;

function App() {
  const createOrder1 = (data, actions) => {
    // Your first createOrder function code here
  };

  const createOrder2 = (data, actions) => {
    // Your second createOrder function code here
  };

  return (
    <>
      <PayPalButtons createOrder={createOrder1} />
      <PayPalButtons createOrder={createOrder2} />
    </>
  );
}


function App() {
  const createOrder1 = (data, actions) => {
    // Your first createOrder function code here
  };

  const createOrder2 = (data, actions) => {
    // Your second createOrder function code here
  };

  const buttonStyle = {
    layout: 'horizontal',
    color: 'gold',
    shape: 'rect',
    label: 'pay'
  };

  return (
    <>
      <PayPalButtons createOrder={createOrder1} style={buttonStyle} />
      <PayPalButtons createOrder={createOrder2} style={buttonStyle} />
    </>
  );
}


import { PayPalButton } from "@paypal/react-paypal-js";

function MyComponent() {
  const createOrder = (data, actions) => {
    // Access the parameter values from the data object
    const param1 = data.param1;
    const param2 = data.param2;

    // Create the order object
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '10.00'
        }
      }]
    });
  };

  const buttonData = {
    // Set the data object with parameter values
    // In this example, we're passing two parameters: param1 and param2
    // You can pass any number of parameters this way
    data: {
      param1: 'value1',
      param2: 'value2'
    }
  };

  return (
    // Render the PayPal button with the buttonData object and createOrder function
    <PayPalButton
      createOrder={createOrder}
      {...buttonData}
    />
  );
}
<Box sx={style.box2}>
<Box> 
<Typography
  variant="h5"
  sx={{
    color: "whitesmoke",
    fontSize: breakPoint ? "12px" : "25px",
  }}
>
 
  ${-coupon[0]?.value} Off Entire Order
</Typography>
</Box>
<Box sx={style.box2}> 
<Typography
  variant="h1"
  sx={{
    mr: "10px",
    color: "whitesmoke",
    fontSize: breakPoint ? "21px" : "48px",
  }}
>
  {" "}
  {/* {coupon.map((i)=>{
    return(i.title)
  })} */}
  {coupon[0]?.title}
</Typography>
<Box>
{((success && !csuccess) ) && (
  <Button
    variant="h3"
    onClick={() => {
      handleDiscount(coupon[0]?.title, 0);
    }}
    sx={{
      color: "whitesmoke",
      textDecoration: "underline",
      m: breakPoint ?"0px":"30px",
      fontSize: breakPoint ? "14px" : "30px",
    }}
  >
  
    {"Apply Now"  }
  </Button>
)}
 </Box>
</Box>
{/* {add && <SweetAlert2/>} */}
</Box>