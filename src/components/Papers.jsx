

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
    gap: "5rem",
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
      {breakPoint ? (
        <Paper
          onClick={() => {
            navigate("/coupon");
            window.scrollTo(0, 0);
          }}
          sx={{
            backgroundColor: "#374450",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "25px",
            gap: "40rem",
            borderRadius: "0px",
            scrollSnapAlign: "center",
          }}
          elevation={3}
        >
          <IconButton
            sx={{ ...styles.arrowButton, ...styles.leftArrowButton }}
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </IconButton>

          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}
          >
            10% OFF on your next purchase
          </Typography>
          <IconButton
            sx={{ ...styles.arrowButton, ...styles.rightArrowButton }}
            onClick={scrollRight}
          >
            <ChevronRight />
          </IconButton>
          <Typography

            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",

              cursor: "pointer",
            }}
          >
            SEE ALL OFFERS
          </Typography>
        </Paper>
      ) : (
        <Paper sx={styles.paper} elevation={3} onClick={() => {
          navigate("/coupon");
          window.scrollTo(0, 0);
        }}>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "10px" }}
          >
            20% OFF on your next purchase
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "10px",
              textDecoration: "underline",
            }}
          >
            SEE ALL OFFER
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Papers;


