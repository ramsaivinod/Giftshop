import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
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
import audiobooks from "../logo/JKYOG-Academy-compressed.jpeg"
import books from "../logo/Purpose-of-Life-min.jpeg"
import coupons from "../logo/SMEX-Thumbnail-min.jpeg"
import giftcard from "../logo/SMLA-min.jpeg"
import pen from "../logo/Yoga.jpeg"
import trophy from "../logo/5.webp"
import { fetchDataFromApi } from "../utils/api";


import useMediaQuery from "@mui/material/useMediaQuery"
import giftcard2 from "../logo/giftcard.svg"
import "../styles/banner.css"
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

const picsList = [audiobooks,books,coupons,giftcard,pen,trophy,audiobooks,books,giftcard,coupons,giftcard,pen,trophy];

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
  const [categoryList,setCategoryList] = useState([]);
  const [tags,setTags] = useState([]);
  const breakPoint = useMediaQuery("(min-width:870px)")
  const navigate = useNavigate()
  const itemsCategories = useSelector((state) => state.cart.itemsCategories);

  useEffect(()=>{
    setCategoryList(itemsCategories);
  },[itemsCategories])


  useEffect(()=>{
    const getTags = async() => {
      try {
        const  resp = await fetchDataFromApi("/api/gift-shop-contents?populate=*");
        if(resp){
          setTags(resp?.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      
    };
    getTags()
  },[])

  return (


    <div className="banner_box">
      {tags?.length ? 
        <Slider {...settings} style={{ width: "100%" }}>
          {tags?.map((item,i) => {
            return (
              <div key={i} className="banner_icon" onClick={() => navigate(`/category/${item?.attributes?.title}`)} >
                <div className="bannerimg">
                  <img src={item?.attributes?.content_image?.data?.attributes?.url} alt="banner-image" className="banner_img" />
                </div>

                <div className="banner_text">
                  <div className="text">{item?.attributes?.title}</div>
                </div>
              </div>
            )
          })}
      </Slider>
      : <></>
      }
      
    </div>
  )
}

export default Banner
