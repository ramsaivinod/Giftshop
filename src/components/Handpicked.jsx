import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../styles/HandPicked.css"
import books from "../logo/6.webp"
import coupons from "../logo/2.avif"
import giftcard from "../logo/3.webp"
import pen from "../logo/4.webp"
import trophy from "../logo/5.webp"
import audiobooks from "../logo/1.avif"
import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { fetchDataFromApi } from "../utils/api";

const Handpicked = () => {
  const [heading, setHeadings] = useState([])

  const [currenth, setCurrenth] = useState("")
  //const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.cart.items)

  const englishbooks = products
    .filter((item) => item.tags === currenth)
    .slice(0, 5)
  const newArrivalsItems = products
    .filter((item) => item.tags == currenth)
    .slice(0, 5)

  const SwamijiKirtans = products
    .filter((item) => item.tags == currenth)
    .slice(0, 5)
  const BalMukundBooks = products
    .filter((item) => item.tags === currenth)
    .slice(0, 5)

  const navigate = useNavigate()

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,

        },
      },
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
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
    ],
  }

  useEffect(()=>{
    const getHandpic = async() => {
      try {
        const  resp = await fetchDataFromApi("/api/gift-shop-items?populate=*");
        if(resp){
          console.log("handping",resp?.data.map(item=> item?.attributes?.title));
          setHeadings(resp?.data.map(item=> item?.attributes?.title));
          setCurrenth(heading[1]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      
    };
    getHandpic();
  },[]);

  return (
    <div className="handpicked">
      <div className="hp_body">
        <h1 className="main_heading" style={{ fontFamily: 'HeuristicaRegular' }}> Discover unique hand-picked items</h1>
        <div className="headings">
          {heading?.map((h) => {
            return (
              <h2
                onClick={() => setCurrenth(h)}
                className={currenth == h ? "selected" : ""}
              >
                {h}
              </h2>
            )
          })}
        </div>
        <div className="image_section">
            {heading?.map((h) => {
                return (
                  <Fragment>
                    {currenth == h && products?.filter((item) => item.tags === h)?.slice(0, 5)?.length > 0 &&
                      <Slider {...settings} style={{ width: "100%" }}>
                        {products?.filter((item) => item.tags === h)?.slice(0, 5)?.map((i) => {
                          return <img onClick={() => navigate(`/item/${i.id}`)} src={i.image.src} className="handpic_image" />
                        })}
                      </Slider>
                    }
                  </Fragment>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default Handpicked
