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
const Handpicked = () => {
  const [heading, setHeadings] = useState([
    "English Books",
    "BestSellers",
    "Kirtans",
  ])
  const [currenth, setCurrenth] = useState("English Books")
  //const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.cart.items)

  const englishbooks = products
    .filter((item) => item.tags === "English Books")
    .slice(0, 5)
  const newArrivalsItems = products
    .filter((item) => item.tags == "POS")
    .slice(0, 5)
  const bestSellersItems = products
    .filter((item) => item.tags == "")
    .slice(0, 5)
  const SwamijiKirtans = products
    .filter((item) => item.tags == "Swamiji Kirtans")
    .slice(0, 5)
  const BalMukundBooks = products
    .filter((item) => item.tags === "BalMukund Books")
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
  return (
    <div className="handpicked">
      <div className="hp_body">
        <h1 className="main_heading" style={{ fontFamily: 'HeuristicaRegular' }}> Discover unique hand-picked items</h1>
        <div className="headings">
          {heading.map((h) => {
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
          {currenth == "English Books" ? (
            <Fragment>
              {englishbooks?.length > 0 &&
                <Slider {...settings} style={{ width: "100%" }}>
                  {englishbooks.map((i) => {
                    return <img onClick={() => navigate(`/item/${i.id}`)} src={i.image.src} className="handpic_image" />
                  })}
                </Slider>
              }
            </Fragment>
          ) : currenth == "Kirtans" ? (
            <Fragment>
              <Slider {...settings} style={{ width: "100%" }}>
                {newArrivalsItems.map((i) => {
                  return <img onClick={() => navigate(`/item/${i.id}`)} src={i.image.src} className="handpic_image" />
                })}</Slider>
            </Fragment>
          ) : currenth == "BestSellers" ? (
            <Fragment>   <Slider {...settings} style={{ width: "100%" }}>
              {BalMukundBooks.map((i) => {
                return <img onClick={() => navigate(`/item/${i.id}`)} src={i.image.src} className="handpic_image" />
              })}</Slider>
            </Fragment>
          ) : (
            // : currenth == "Audiobooks" ? (
            //   <Fragment>
            //     {SwamijiKirtans.map((i) => {
            //       return <img src={i.image.src} />;
            //     })}
            //   </Fragment>
            // )

            <Fragment>   <Slider {...settings} style={{ width: "100%" }}>
              {SwamijiKirtans.map((i) => {
                return <img onClick={() => navigate(`/item/${i.id}`)} src={i.image.src} className="handpic_image" />
              })}</Slider>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Handpicked
