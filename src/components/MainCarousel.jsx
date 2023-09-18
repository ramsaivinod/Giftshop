import { Box, IconButton } from "@mui/material";
//import {Typography} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
//import { shades } from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../App.css";
import "../styles/Caraousel.css"
import { useEffect ,useState} from "react";
import { fetchDataFromApi } from "../utils/api";
import { Link } from "react-router-dom";


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
  //const isNonMobile = useMediaQuery("(min-width:600px)");
  const breakPoint = useMediaQuery("(max-width:750px)");
const [response,setRes] = useState([])

useEffect(()=>{
  const getCategories = async() => {
    try {
      const  resp = await fetchDataFromApi("/api/gift-shop-banners?populate=*");
      if(resp){
        console.log(resp.data,"respData")
        setRes(resp?.data)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  
    // 'categoriesData' is not available here immediately after calling 'fetchDataFromApi'
  
    // You can perform other operations here, but avoid relying on 'categoriesData' at this point
  };
  getCategories()
},[])

console.log(response,"response")
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
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {response && response.map((texture, index) => (
        <Link to={texture?.attributes?.banner_url}>
        <Box key={`carousel-image-${index}`}>
            <img
              className="carousel-img"
              src={texture?.attributes?.banner_image?.data?.attributes?.url}
              alt={`carousel-${index}`}
              style={{
                width: breakPoint?"":"100%",
                height: "auto",
                marginTop: breakPoint ? "4.1rem" : "4.1rem",
                objectFit: breakPoint ? "cover" : "",
                backgroundAttachment: "fixed",
              }}
            />
          
          {/* <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>-- JKYOG</Typography>
            <Typography variant="h5">WELCOME</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              Discover More
            </Typography>
          </Box> */}
        </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default MainCarousel;

// position: fixed;
// top:0; left:0;
// min-height: 100vh;
// width: 100%;
// background: rgba(0,0,0,.8);
// display: none;
// align-items: center;
// justify-content: center;
