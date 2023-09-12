import {
  Box,
  Typography,
  Grid,
  IconButton,
  Container,
  Icon,
  useTheme,
  Button,
} from "@mui/material"
import { ShoppingCart, LocalShipping, Payment } from "@mui/icons-material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import MoneyIcon from "@mui/icons-material/Money"
import { shades, theme } from "../theme"
import { makeStyles } from "tss-react/mui"
import top100 from "../logo/top100.png"
import audiobooks from "../logo/1.avif"
import books from "../logo/6.webp"
import coupons from "../logo/2.avif"
import giftcard from "../logo/3.webp"
import pen from "../logo/4.webp"
import trophy from "../logo/5.webp"
import useMediaQuery from "@mui/material/useMediaQuery"
import giftcard2 from "../logo/giftcard.svg"
import "./banner.css"
import { useNavigate } from "react-router-dom"
import { Fragment } from "react"

//books,coupons,giftcard,pen,trophy
const pics = [
  { i: audiobooks, c: "Bestsellers" },
  { i: books, c: "Books" },
  { i: coupons, c: "Coupons" },
  { i: giftcard, c: "Giftcard" },
  { i: pen, c: "Pen" },
  { i: trophy, c: "Trophy" },
]

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,

  responsive: [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,


      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

      },
    },
  ],
}
function Banner() {
  const breakPoint = useMediaQuery("(min-width:870px)")
  const navigate = useNavigate()

  return (


    <div className="banner_box">
      <Slider {...settings} style={{ width: "100%" }}>
        {pics.map((p) => {
          return (
            <div className="banner_icon">
              <div className="bannerimg">
                <img src={p.i} alt="banner-image" className="banner_img" />
              </div>

              <div className="banner_text">
                <text>{p.c}</text>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Banner
