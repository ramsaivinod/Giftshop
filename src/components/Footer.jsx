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
        <Subscribe />

        <div className="row content" style={{ marginTop: "50px" }}>
          <div className="col-sm-12 col-md-3">
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
          </div>
          <div className="col-sm-12 col-md-3">
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
          <div className="col-sm-12 col-md-3 contact">
            <Box  >
              <Typography className="htxt">
                Contact Us
              </Typography>
              <Typography color="white">

                <MailOutlinedIcon style={{ color: "#ff6d2f" }} />

                Email: secretary@jkyog.org
              </Typography>

              <Typography sx={{ wordWrap: "break-word" }} color="white">

                <HomeIcon style={{ color: "#ff6d2f" }} />

                Plano, Tx 75025 U.S
              </Typography>
              <Typography color="white">

                <LocalPhoneIcon style={{ color: "#ff6d2f" }} />

                +1 (469) 795-9135
              </Typography>
            </Box>
          </div>
          <div className="col-sm-12 col-md-3">
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

    </Box>
  )
}

export default Footer
