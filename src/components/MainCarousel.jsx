import { useEffect, useState } from "react";
import { Box, IconButton, Skeleton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";

import "../App.css";
import "../styles/Caraousel.css";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg|avif)$/)
);

const MainCarousel = () => {
  const breakPoint = useMediaQuery("(max-width:750px)");
  const [response, setRes] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const resp = await fetchDataFromApi(
          "/api/gift-shop-banners?populate=*"
        );
        if (resp) {
          // console.log(resp.data, "banners-api");
          setRes(resp?.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getCategories();
  }, []);

  console.log(response, "response");
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      stopOnHover={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            // zIndex: '10',
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {response.length > 0 ? (
        response.map((texture, index) => (
          <Link to={texture?.attributes?.banner_url}>
            <Box key={`carousel-image-${index}`}>
              <img
                className="carousel-img"
                src={texture?.attributes?.banner_image?.data?.attributes?.url}
                alt={`carousel-${index}`}
                style={{
                  width: breakPoint ? "" : "100%",
                  height: "auto",
                  marginTop: breakPoint ? "4.1rem" : "4.1rem",
                  objectFit: breakPoint ? "cover" : "",
                  backgroundAttachment: "fixed",
                }}
              />
            </Box>
          </Link>
        ))
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{ marginTop: "4.1rem", width: "100%", height: "60vh" }}
          animation="wave"  
        />
      )}
    </Carousel>
  );
};

export default MainCarousel;
