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

function Footer() {
  // const {
  //   palette: { neutral },
  // } = useTheme();

  //backgroundColor={neutral.light}
  //background: url('images/checked.png'), #6DB3F2;

  return (
    <Box
      marginTop="70px"
      padding="40px 0"
      backgroundColor="#171381"
      style={{ backgroundImage: `url(${images})` }}
    >
      <Subscribe />
      <Box
        width="80%"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        padding="30px"
      >
        {/* width="clamp(20%, 30%, 40%)" */}
        <Box>
          <Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              mb="30px"
              color="#ff6d2f"
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
                  <Typography mb="30px" color="white" textAlign={"left"}>
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
                  <Typography mb="30px" color="white" textAlign={"left"}>
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
                  <Typography mb="30px" color="white" textAlign={"left"}>
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
                  <Typography mb="30px" color="white" textAlign={"left"}>
                    {" "}
                    JKYog Youth Club
                  </Typography>
                </a>
              </li>
            </ul>
          </Box>
          {/* <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            // color={shades.secondary[500]}
            color="#ff6d2f"
          >
            JKYOG
          </Typography>
          <div style={{ color: "white" }}>
            JKYog is a part of the worldwide mission envisioned by Jagadguru
            Kripaluji Shree Maharaj, the 5th authentic 'Jagadguru', spiritual
            master of the world. Shree Maharajji as he is lovingly referred to
            by all his devotees, was one of the most endearing divine
            personalities of the last 90 years who dedicated his entire life for
            the service of humanity, especially for the spiritual upliftment of
            the society.
          </div> */}
        </Box>

        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px" color="#ff6d2f">
            Our Centers
          </Typography>
          <ul style={{ color: "#ff6d2f" }}>
            <li>
              <a
                href="https://www.jkyog.org/centers"
                target="_blank"
                rel="noreferrer"
              >
                <Typography mb="30px" color="white" textAlign={"left"}>
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
                <Typography mb="30px" color="white" textAlign={"left"}>
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
                <Typography mb="30px" color="white" textAlign={"left"}>
                  {" "}
                  SINGAPORE
                </Typography>
              </a>
            </li>
          </ul>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h3" fontWeight="bold" mb="30px" color="#ff6d2f">
            Contact Us
          </Typography>
          <Typography mb="30px" color="white">
            <IconButton>
              <MailOutlinedIcon style={{ color: "#ff6d2f" }} />
            </IconButton>
            Email: secretary@jkyog.org
          </Typography>

          <Typography mb="30px" sx={{ wordWrap: "break-word" }} color="white">
            <IconButton>
              <HomeIcon style={{ color: "#ff6d2f" }} />
            </IconButton>
            Plano, Tx 75025 U.S
          </Typography>
          <Typography mb="30px" color="white">
            <IconButton>
              <LocalPhoneIcon style={{ color: "#ff6d2f" }} />
            </IconButton>
            +1 (469) 795-9135
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h3" fontWeight="bold" mb="30px" color="white">
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
                {" "}
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

            <Box>
              <Typography
                varinat="h4"
                fontSize="medium"
                fontWeight={"600"}
                style={{ backgroundImage: `url(${menu})` }}
              >
                {" "}
                5M Followers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
