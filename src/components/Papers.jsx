// import React from "react";

// import { Paper, Typography, Box } from "@mui/material";

// const Papers = () => {
//   return (
//     <Paper
//       sx={{
//         backgroundColor: "purple",
//         padding: "0px",
//         //marginTop:"-100em",
//         // marginTop:"80px",
//         // marginBottom:"-80px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "20px",
//       }}
//       elevation={3}
//     >
//       <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
//         20% OFF on your next purchase
//       </Typography>
//     </Paper>
//   );
// };

import React, { useRef } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
const styles = {
  container: {
    display: "flex",
    scrollBehavior: "smooth",
    scrollSnapType: "x mandatory",
    backgroundColor: "#4d4d4d",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  paper: {
    backgroundColor: "#4d4d4d",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20px",
    borderRadius: "0px",
    scrollSnapAlign: "center",
  },
  arrowButton: {
    color: "white",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  leftArrowButton: {
    left: 0,
  },
  rightArrowButton: {
    right: 0,
  },
};

const Papers = () => {
  const breakPoint = useMediaQuery("(min-width:1000px)");
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div style={styles.container} ref={containerRef}>


      <Paper
        onClick={() => {
          navigate("/coupon");
          window.scrollTo(0, 0);
        }}
        sx={{
          backgroundColor: "#374450",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "25px",
          borderRadius: "0px",
          scrollSnapAlign: "center",
        }}
        elevation={3} className="nav-offer"
      >
        <marquee>
          <Typography className="slide-offer">
            <span>10% OFF on your next purchase</span>
            <span>SEE ALL OFFERS</span>
          </Typography>
        </marquee>

      </Paper>

      {/* <Paper sx={styles.paper} elevation={3}>

      </Paper> */}
      {/* <Paper sx={styles.paper} elevation={3}>
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
          Free Shipping on all orders
        </Typography>
      </Paper> */}
    </div>
  );
};

export default Papers;

//export default Papers;

//   paper: {
//     backgroundColor: '#6A5ACD',
//     padding: theme.spacing(1),
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '18px',
//   },
// }));

// function CouponDiscount(props) {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.paper} elevation={3}>
//       <Typography className={classes.text}>
//         {props.discount}% OFF on your next purchase
//       </Typography>
//     </Paper>
//   );
// }

// export default CouponDiscount;
