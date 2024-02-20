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
import { Link, useNavigate } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/search?category=${route}&filter=All&searchInput=none`);
  };
  return (
    <Box
      backgroundColor="#FFFBF2"
      // style={{ backgroundImage: `url(${images})` }}
    >
      <Box className="footerbox">
        {/* Commented out Subscribe component */}
        {/* <Subscribe /> */}
        <div className="row content" style={{ marginTop: "50px" }}>
          <div className="col-sm-12 col-md-3">
            <div className="donate-login-vol">
              <a
                href="https://apps.apple.com/in/app/radha-krishna-bhakti-by-jkyog/id6463116386"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"https://bhagavadgita.io/app_store.svg"}
                  alt="appStore"
                  style={{ height: "3rem" }}
                  title="appStore"
                  loading="eager"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=org.jkyog.radhakrishnabhakti&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"https://bhagavadgita.io/play_store.svg"}
                  alt="playStore"
                  style={{ height: "3rem", marginTop: "1rem" }}
                  title="playStore"
                  loading="eager"
                />
              </a>
            </div>
            <div className="donate-login-vol">
              <a
                href="https://www.jkyog.org/radha-krishna-bhakti-app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={krishnaBhakti}
                  style={{ height: "4rem" }}
                  alt="krishnaBhakti"
                  title="krishnaBhakti"
                  loading="eager"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 programs-center">
            <Box>
              <Typography className="htxt">Categories</Typography>
              {/* List of center links */}
              <ul style={{ color: "#EF6F1F" }}>
                <li>
                  <div onClick={() => handleNavigate("Life Transformation")}>
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Life Transformation
                    </Typography>
                  </div>
                </li>
                <li>
                  <div onClick={() => handleNavigate("Yoga & Lifestyle")}>
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Yoga & Lifestyle
                    </Typography>
                  </div>
                </li>
                <li>
                  <div onClick={() => handleNavigate("Signed Editions")}>
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Signed Editions
                    </Typography>
                  </div>
                </li>
                <li>
                  <div onClick={() => handleNavigate("Audiobooks")}>
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Audiobooks
                    </Typography>
                  </div>
                </li>
                <li>
                  <div onClick={() => handleNavigate("Self-Help")}>
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      Self-Help
                    </Typography>
                  </div>
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
          <div className="col-sm-12 col-md-3" style={{ display: "grid" }}>
            <Box>
              <h2 className="htxt" style={{ fontWeight: "400" }}>
                Help Desk Contact
              </h2>
              <Typography>
                <div className="whatsapp">
                  <a
                    href="https://jkyog.live/w/giftshop"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: "#fff",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      style={{ height: "1.2rem" }}
                      title="whatsapp"
                      loading="eager"
                    />
                    <span className="social-view">+555-555-5555</span>
                  </a>
                </div>
                <div className="mail">
                  <a
                    href="mailto:giftshop@jkyog.org"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: "#fff",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={mail}
                      alt="mail"
                      style={{ height: "1.2rem" }}
                      title="mail"
                      loading="eager"
                    />
                    <span className="social-view">giftshop@jkyog.org</span>
                  </a>
                </div>
              </Typography>
            </Box>
            <Box style={{ marginTop: "2rem" }}>
              <Typography className="htxt">Follow us</Typography>
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
                <div onClick={() => navigate("/terms-of-use")}>
                  Terms of Use
                </div>
              </li>
              {/* <li>
                <div onClick={() => navigate("/copyright-and-trademark")}>
                  Copyright & Trademark
                </div>
              </li> */}
              <li>
                <div onClick={() => navigate("/privacy-policy")}>
                  Privacy Policy
                </div>
              </li>
              <li>
                <div onClick={() => navigate("/sitemap")}>Sitemap</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Box>
  );
}

export default Footer;
