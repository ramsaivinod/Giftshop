import { Box, Typography, Button } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import NavMenu from "./NavMenu";
import { RANDOM_ITEMS } from "../utils/constants";
import Slider from "react-slick";
import Item2 from "./Item2";

function ProductDisplay() {
  const [zoomed, setZoomed] = useState(false);
  const zoomRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const cursorStyle = {
    position: "absolute",
    pointerEvents: "none",
    left: cursorPos.x,
    top: cursorPos.y,
    width: "8rem",
    height: "9rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#e5e5f7",
    opacity: 0.5,
    backgroundImage:
      "repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7)",
    backgroundSize: "5px 5px",
  };

  const handleZoomDisplay = (e) => {
    if (!zoomRef.current) return;

    const { top, left, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setCursorPos({ x: e.clientX, y: e.clientY });
    zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const itemDetails = {
    vendor: "JKYog Giftshop",
    product_type: "Swamijis Books",
    published_scope: "global",
    tags: "Books, English, Human Excellence, Life Transformation, Mind Management, Swamijis Books",
    position: 1,
    inventory_policy: "deny",
    compare_at_price: "18.00",
    updated_at: "2023-11-28T17:33:56-05:00",
    taxable: true,
    barcode: "9789390327089",
    grams: 499,
    image_id: null,
    weight: 1.1,
    weight_unit: "lb",
    inventory_item_id: 43932826501165,
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    marginBottom: "30px",
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Box>
        <NavMenu navFromTop={false} />
        <section
          name="product-top-section"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "1.5rem",
            marginTop: "4rem",
            gap: "0.7rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              height: "450px",
              width: "5% ",
              position: "relative",
              overflow: "hidden",
              paddingRight: "0.2rem",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                boxShadow: "0.6px 1.3px 1.3px hsl(0deg 0% 0% / 0.48)",
                border: "1px solid white",
                "&:hover": {
                  border: "2px solid orange",
                },
              }}
            >
              <img
                style={{ objectFit: "contain", height: "70px" }}
                src="https://cdn.shopify.com/s/files/1/0325/5084/6509/products/7Mindsets-Gujarati.png?v=1700577915"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                boxShadow: "0.6px 1.3px 1.3px hsl(0deg 0% 0% / 0.48)",
                border: "1px solid white",
                "&:hover": {
                  border: "2px solid orange",
                },
              }}
            >
              <img
                style={{ objectFit: "contain", height: "70px" }}
                src="https://cdn.shopify.com/s/files/1/0325/5084/6509/products/7Mindsets-Gujarati.png?v=1700577915"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                boxShadow: "0.6px 1.3px 1.3px hsl(0deg 0% 0% / 0.48)",
                border: "1px solid white",
                "&:hover": {
                  border: "2px solid orange",
                },
              }}
            >
              <img
                style={{ objectFit: "contain", height: "70px" }}
                src="https://cdn.shopify.com/s/files/1/0325/5084/6509/products/7Mindsets-Gujarati.png?v=1700577915"
              />
            </Box>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: "450px",
              width: "40% ",
              border: "1px solid #f0f0f0",
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
              boxSizing: "content-box",
            }}
          >
            <Box
              sx={{
                height: "inherit",
                background: "#F6F6F6",
                "&:hover": {
                  cursor: "crosshair",
                },
              }}
            >
              <img
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleZoomDisplay}
                alt="Product"
                style={{
                  objectFit: "contain",
                  height: "inherit",
                  width: "100%",
                }}
                src="https://cdn.shopify.com/s/files/1/0325/5084/6509/products/7Mindsets-Gujarati.png?v=1700577915"
              />
            </Box>
          </div>
          {zoomed && (
            <div
              ref={zoomRef}
              style={{
                position: "absolute",
                border: "1px solid grey",
                width: "51%",
                height: "600px",
                overflow: "hidden",
                right: "2rem",
                zIndex: 1,
                backgroundImage: `url(${"https://cdn.shopify.com/s/files/1/0325/5084/6509/products/7Mindsets-Gujarati.png?v=1700577915"})`,
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            ></div>
          )}
          {zoomed && <div style={cursorStyle} />}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              height: "450px",
              width: "55% ",
            }}
          >
            <Box
              sx={{
                padding: "2rem",
                height: "100%",
                gap: "1rem",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                }}
              >
                7 Divine Laws to Awaken Your Best Self - English Edition
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  fontSize: "2.5rem",
                  gap: "1rem",
                }}
              >
                <Box>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        style={{
                          color:
                            index <= (hover || rating) ? "#ccc" : "#F5961D",
                        }}
                        // onClick={() => setRating(index)}
                        // onMouseEnter={() => setHover(index)}
                        // onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.6rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      paddingTop: "0.8rem",
                    }}
                  >
                    5.0
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      paddingTop: "1.1rem",
                      textDecoration: "underline",
                      cursor: "pointer",
                      "&:hover": {
                        color: "blue",
                      },
                    }}
                  >
                    (78 Reviews)
                  </Typography>
                </Box>
              </div>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "1.7rem",
                    fontWeight: 500,
                  }}
                >
                  $ 49.90
                </Typography>
              </Box>

              <Box sx={{ padding: "1rem 0" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F28C28",
                    fontSize: "1.2rem",
                    borderRadius: "2rem",
                    padding: "0.3rem 3.125rem",
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </div>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 5rem",
            gap: "1.5rem",
          }}
        >
          <Box>
            <Typography
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
              }}
            >
              Description
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "dimgrey",
                letterSpacing: "0.5px",
                lineHeight: "30px",
              }}
            >
              Just as heat is inherent in fire, so is our desire to become
              better.' Why are personal growth and life transformation so
              difficult? Does Creation wish that we fail? Of course not! The
              purpose behind the Universe's grand design is to make us succeed.
              Our own unawareness of the laws of the Universe creates the
              impediment. Just as physical phenomena are regulated by laws,
              there are spiritual principles governing the journey of life as
              well. Knowledge of them helps us understand why success comes so
              easily to some but remains a struggle for others; why some are
              still putting on their shoes, while others have finished the race.
              The beauty is that, like the physical laws of nature, the divine
              principles governing happiness and fulfilment in life are also
              eternally valid. In this book, Swami Mukundananda explains the 7
              divine laws in an easily graspable manner. With knowledge of the
              Vedic scriptures and witty anecdotes that everyone can relate to,
              this book will empower you to become the best version of yourself.
            </Typography>
          </Box>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 5rem",
            gap: "1.5rem",
          }}
        >
          <Box>
            <Typography
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
              }}
            >
              Item Details
            </Typography>
          </Box>
          <Box>
            {Object.entries(itemDetails).map(([key, value]) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "1rem",
                  width: "100%",
                  flexFlow: "row wrap",
                  marginTop: "1rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  key={key}
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "1rem",
                    color: "#878787",
                    paddingRight: "8px",
                    width: "25%",
                  }}
                >
                  {`${key}: `}
                </Typography>
                <Typography
                  key={key}
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "1rem", // Adjust the font size as needed
                    lineHeight: 1.4,
                    wordBreak: "break-word",
                    color: "#212121",
                  }}
                >
                  {`${value}`}
                </Typography>
              </div>
            ))}
          </Box>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 5rem",
            gap: "1.5rem",
          }}
        >
          <Box>
            <Typography
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
              }}
            >
              Similar Products
            </Typography>
          </Box>
          <Box>
            {RANDOM_ITEMS?.length > 3 ? (
              <Slider {...settings} className="trendingitems">
                {RANDOM_ITEMS.map((item) => (
                  <Fragment>
                    <Item2 item={item} key={`${item.title}-${item.id}`} />
                  </Fragment>
                ))}
              </Slider>
            ) : (
              <Box
                margin="20px auto"
                display="grid"
                gridTemplateColumns={"repeat(auto-fill, 250px)"}
                justifyContent="space-around"
                rowGap="100px"
                columnGap="3.33%"
              >
                {" "}
                <Slider {...settings} className="trendingitems">
                  {bestSellersItems.map((item) => (
                    <Fragment>
                      <Item2 item={item} key={`${item.title}-${item.id}`} />
                    </Fragment>
                  ))}
                </Slider>
              </Box>
            )}
          </Box>
        </section>
      </Box>
    </Fragment>
  );
}

export default ProductDisplay;
