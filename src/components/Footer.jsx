// Import necessary modules, components, and icons
import { Box, Typography, IconButton } from "@mui/material";
import images from "../assets/images/main-footer-bg.jpg";
import menu from "../assets/images/menu-shape.png";
import appStore from "../assets/images/App-Store-Logo.png";
import krishnaBhakti from "../assets/images/logo.png";
import whatsapp from "../assets/images/whatsapp.png";
import mail from "../assets/images/mail.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <Box
      backgroundColor="#171381"
      style={{ backgroundImage: `url(${images})` }}
    >
      <Box className="footerbox">
        {/* Commented out Subscribe component */}
        {/* <Subscribe /> */}
        <div className="row content" style={{ marginTop: "50px" }}>
          <div className="col-sm-12 col-md-3">
            <div className="donate-login-vol">
              <img
                src={appStore}
                alt="appStore"
                style={{ height: "4rem" }}
                title="appStore"
              />
            </div>
            <div className="donate-login-vol">
              <img
                src={krishnaBhakti}
                style={{ height: "4rem" }}
                alt="krishnaBhakti"
                title="krishnaBhakti"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-3 programs-center">
            <Box>
              <Typography className="htxt">Categories</Typography>
              {/* List of center links */}
              <ul style={{ color: "#EF6F1F" }}>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Life Transformation
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Yoga & Lifestyle
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Best Sellers - tag-driven
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Signed Editions
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Audiobooks
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Self-Help
                    </Typography>
                  </a>
                </li>
              </ul>
            </Box>
          </div>
          <div className="col-sm-12 col-md-3 programs-center">
            <Box>
              <Typography className="htxt">Programs</Typography>
              {/* List of program links */}
              <ul style={{ color: "#EF6F1F" }}>
                <li>
                  <a
                    href="https://www.jkyog.org/life-transformation-programs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Life Transformation Program
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/retreats"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      JKYOG Retreats
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/bal-mukund"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Bal-Mukund
                    </Typography>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jkyog.org/jkyog-youth-club"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      JKYog Youth Club
                    </Typography>
                  </a>
                </li>
              </ul>
            </Box>
          </div>
          <div className="col-sm-12 col-md-3" style={{ display:"grid" }}>
            <Box>
              <h2 className="htxt" style={{ fontWeight: "400" }}>
                Help Desk Contact
              </h2>
              <Typography>
                <div className="whatsapp">
                  <a href="tel:+5555555555" style={{ display: 'flex', textDecoration: 'none', color: '#fff', alignItems: 'center', }}>
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      style={{ height: "1.2rem" }}
                      title="whatsapp"
                    />
                    <span style={{ padding: "0 1rem" }}>+555-555-5555</span>
                  </a>
                </div>
                <div className="mail">
                  <a href="mailto:info@jkyog.org" style={{ display: 'flex', textDecoration: 'none', color: '#fff', alignItems: 'center', }}>
                    <img
                      src={mail}
                      alt="mail"
                      style={{ height: "1.2rem" }}
                      title="mail"
                    />
                    <span style={{ padding: "0 1rem" }}>info@jkyog.org</span>
                  </a>
                </div>
              </Typography>
            </Box>
            <Box style={{ marginTop:"2rem" }}>
              <Typography className="htxt">Connect With US</Typography>
              {/* Social media icons and links */}
              <Box display={"flex"}>
                <Box>
                  <IconButton>
                    <a
                      href="https://www.youtube.com/channel/UCclfz6zVWWOpsQsg3OheI3g"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <YouTubeIcon
                        fontSize="large"
                        style={{ color: "#EF6F1F" }}
                      />
                    </a>
                  </IconButton>
                </Box>
                <IconButton>
                  <a
                    href="https://www.facebook.com/Swami.Mukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://twitter.com/Sw_Mukundananda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <TwitterIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://chat.whatsapp.com/HwyzZcNFJAUIESvu9VwFOU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <WhatsAppIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.linkedin.com/in/swamimukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <LinkedInIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.instagram.com/swami_mukundananda/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <InstagramIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://www.pinterest.com/SwamiMukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <PinterestIcon
                      fontSize="large"
                      style={{ color: "#EF6F1F" }}
                    />
                  </a>
                </IconButton>
              </Box>
              {/* Social media follower count */}
              <Box>
                <Typography
                  varinat="h4"
                  fontSize="medium"
                  fontWeight={"600"}
                  style={{
                    backgroundImage: `url(${menu})`,
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="ms-4"> 5M Followers</span>
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
      {/* Mini footer section */}
      <section className="mini-footer">
        <div className="content-area">
          <div className="copy-right">
            © Copyright 2020 JKYog. All Rights Reserved.
          </div>
          <div className="terms-policy">
            <ul>
              {/* Links to terms and conditions and privacy policy */}
              <li>
                <a href="/giftshop/terms-use" target="_self">
                    Terms of Use
                </a>
              </li>
              <li>
                <a href="/giftshop/copyright-trademark" target="_self">
                  Copyright & Trademark
                </a>
              </li>
              <li>
                <a href="/giftshop/privacy-policy" target="_self">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/giftshop/sitemap" target="_self">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Box>
  );
}

export default Footer;
