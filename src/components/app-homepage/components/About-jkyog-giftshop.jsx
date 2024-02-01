import { Fragment, useEffect, useState } from "react";
import { getData } from "../../../api/Api";
import { Typography, useMediaQuery } from "@mui/material";

function AboutJkyogGiftshop() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [aboutJKYogDetails, setAboutJKYogDetails] = useState([]);

  useEffect(() => {
    getData("/api/homepage-about-us?populate=*")
      .then((response) => setAboutJKYogDetails(response?.data.attributes))
      .catch((error) =>
        console.error("Error fetching aboutJKYogDetails:", error)
      );
  }, []);

  return (
    <Fragment>
      <Typography marginTop="1rem" marginBottom="1.5rem">
        <h2 style={about_jkyog_gift_shop}>{aboutJKYogDetails?.title}</h2>
      </Typography>
      <div style={about_jkyog_gift_shop_box(isMobile)}>
        {/* <div className="about_jkyog_gift_shop_image"></div> */}
        <img
          src={aboutJKYogDetails?.Thumbnail?.data.attributes.url}
          style={imageStyle(isMobile)}
          loading="lazy"
        />
        <div className="about_jkyog_gift_shop_textBox">
          <p className="about_jkyog_gift_shop_text">
            {aboutJKYogDetails?.description}
          </p>
          {/* <div style={{ width: "100%" }}>
            <button
              className="addtocart"
              onClick={() => navigate(aboutJKYogDetails?.Link)}
            >
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

/**
 * @Styles
 */
const about_jkyog_gift_shop = {
  marginTop: "20px",
  fontSize: "2rem",
  color: "#4d4d4d",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const imageStyle = (isMobile) => ({
  width: isMobile ? "100%" : "40%",
  height: "300px",
  objectFit: isMobile ? "contain" : "cover",
  borderRadius: "1rem",
});

const about_jkyog_gift_shop_box = (isMobile) => ({
  display: "flex",
  padding: "0.75rem 1.5rem 2.75rem 0.75rem",
  alignItems: "flex-start",
  gap: "1.25rem",
  width: "100%",
  flexDirection: isMobile ? "column" : "row",
});

export default AboutJkyogGiftshop;
