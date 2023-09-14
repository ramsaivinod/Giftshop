//import { useTheme } from "@emotion/react";
import { Box, Typography, IconButton } from "@mui/material"
//import { shades } from "../theme";
//import Link from "@mui/material";
import Subscribe from "./Subscribe"
import images from "../images/main-footer-bg.jpg"
import menu from "../images/menu-shape.png"
import YouTubeIcon from "@mui/icons-material/YouTube"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PinterestIcon from "@mui/icons-material/Pinterest"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import HomeIcon from "@mui/icons-material/Home"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import "../styles/footer.css"
function Footer() {

  return (
    <Box
      backgroundColor="#171381"
      style={{ backgroundImage: `url(${images})` }}
    >
      <Box className="footerbox" >
        {/* <Subscribe /> */}
        <div className="row content" style={{ marginTop: "50px" }}>
          <div className="col-sm-12 col-md-5">
            <Box className="full-address">
              <Typography className="htxt">
                Contact Us
              </Typography>
              <Typography color="white" style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "10px" }}>
                <MailOutlinedIcon style={{ position: "relative", top: "-2px", marginRight: "10px" }} />
                Email: secretary@jkyog.org
              </Typography>

              <Typography sx={{ wordWrap: "break-word" }} color="white" style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "10px" }}>
                <HomeIcon style={{ position: "relative", top: "-2px", marginRight: "10px" }} />
                Plano, Tx 75025 U.S
              </Typography>
              <Typography color="white" style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "10px" }}>
                <LocalPhoneIcon style={{ position: "relative", top: "-2px", marginRight: "10px" }} />
                +1 (469) 795-9135
              </Typography>
            </Box>
            <div className="donate-login-vol">
              <ul>
                <li>
                  <a href="https://jkyog.org/donate" target="_blank" title="Donate Page Url">
                    <img src="https://www.jkyog.org/themes/custom/jkyog/images/donate.png" alt="Donate" title="Donate" />
                    <br />Donate
                  </a>
                </li>
                <li>
                  <a href="https://www.jkyog.org/volunteer" target="_self" title="Volunteer Page Url ">
                    <img src="https://www.jkyog.org/themes/custom/jkyog/images/volunteer.png" alt="Volunteer" title="Volunteer" />
                    <br />Volunteer
                  </a>
                </li>
                <li>
                  <a href="https://login.jkyog.org/user/login" title="Login Page Url" style={{ lineHeight: "25px" }}>
                    <img src="https://www.jkyog.org/themes/custom/jkyog/images/login.png" alt="Login" title="Login" />      <br />Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 programs-center">
            <Box>
              <Typography
                className="htxt"
              >
                Programs
              </Typography>
              <ul style={{ color: "#ff6d2f" }}>
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
            <Box>
              <Typography className="htxt">
                Our Centers
              </Typography>
              <ul style={{ color: "#ff6d2f" }}>
                <li>
                  <a
                    href="https://www.jkyog.org/centers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography color="white" textAlign={"left"}>
                      {" "}
                      USA
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
                      INDIA
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
                      SINGAPORE
                    </Typography>
                  </a>
                </li>
              </ul>
            </Box>

          </div>
          <div className="col-sm-12 col-md-4">
            <Box >
              <Typography className="htxt" color="white">
                Connect With US
              </Typography>
              <Box display={"flex"}>
                <Box>
                  <IconButton>
                    <a
                      href="https://www.youtube.com/channel/UCclfz6zVWWOpsQsg3OheI3g"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <YouTubeIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                    </a>
                  </IconButton>
                </Box>

                <IconButton>
                  <a
                    href="https://www.facebook.com/Swami.Mukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FacebookIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://twitter.com/Sw_Mukundananda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <TwitterIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://chat.whatsapp.com/HwyzZcNFJAUIESvu9VwFOU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <WhatsAppIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://www.linkedin.com/in/swamimukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <LinkedInIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://www.instagram.com/swami_mukundananda/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <InstagramIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://www.pinterest.com/SwamiMukundananda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <PinterestIcon fontSize="large" style={{ color: "#ff6d2f" }} />
                  </a>
                </IconButton>


              </Box>
              <Box >
                <Typography
                  varinat="h4"
                  fontSize="medium"
                  fontWeight={"600"}
                  style={{ backgroundImage: `url(${menu})`, height: "55px", display: "flex", alignItems: "center", backgroundRepeat: "no-repeat" }}
                >

                  <span className="ms-4"> 5M Followers</span>
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
      <section className="mini-footer">
        <div className="content-area">
          <div className="copy-right">© Copyright 2020 JKYog. All Rights Reserved.</div>
          <div className="terms-policy">
            <ul>
              <li>
                <a href="/jkyog_live/terms-use" target="_self">Terms and Conditions</a>
              </li>
              <li>
                <a href="/jkyog_live/privacy-policy" target="_self">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Box>
  )
}

export default Footer
