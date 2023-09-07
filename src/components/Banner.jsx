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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
}

function Banner() {
  const breakPoint = useMediaQuery("(min-width:870px)")
  const navigate = useNavigate()

  return (
    //  {!breakPoint ? (
    //     <Slider {...settings}>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={trophy}
    //                     alt="not found"
    //                     className="image"
    //                     style={{
    //                       width: "4rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>

    //                 <Typography marginLeft={1} marginTop={3} variant="h5">
    //                   BestSellers
    //                 </Typography>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={audiobooks}
    //                     alt="not found"
    //                     className="image"
    //                     style={{
    //                       width: "3rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>

    //                 <Typography marginLeft={1} marginTop={3} variant="h5">
    //                   AudioBooks
    //                 </Typography>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={giftcard}
    //                     alt="not found"
    //                     className="image"
    //                     style={{
    //                       width: "4rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>

    //                 <Typography marginLeft={1} marginTop={5} variant="h5">
    //                   Giftcard
    //                 </Typography>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={coupons}
    //                     alt="not found"
    //                     className="image"
    //                     onClick={() => {
    //                       navigate("/coupon");
    //                       window.scrollTo(0, 0);
    //                     }}
    //                     style={{
    //                       width: "4rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>

    //                 <Typography marginLeft={1} marginTop={5} variant="h5">
    //                   Coupons
    //                 </Typography>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={books}
    //                     alt="not found"
    //                     className="image"
    //                     style={{
    //                       width: "3rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>

    //                 <Typography marginLeft={1} marginTop={5} variant="h5">
    //                   Books
    //                 </Typography>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>
    //       <div>
    //         <Box
    //           sx={{
    //             // backgroundColor: "rgba(247,240,222,1)",
    //             padding: "2rem ",
    //             paddingRight: "87px",
    //             height: "10rem",
    //             width: "100%",
    //             display: "inline-grid",
    //             marginTop: "0em",
    //           }}
    //         >
    //           <Grid item xs={12} md={2}>
    //             <Box
    //               display="flex"
    //               flexDirection={"column"}
    //               alignItems="center"
    //             >
    //               <Box
    //                 className="image-container"
    //                 display="flex"
    //                 flexDirection={"column"}
    //                 alignItems="center"
    //                 sx={{
    //                   borderRadius: "100%",
    //                   height: "110px",
    //                   width: "110px",
    //                   background: "#ffded0",
    //                   // "&:hover": {
    //                   //   //you want this to be the same as the backgroundColor above
    //                   //   backgroundColor: "#F24E1E",

    //                   // },
    //                 }}
    //               >
    //                 <Box>
    //                   {/* <div className="image-container"> */}
    //                   <img
    //                     src={pen}
    //                     alt="not found"
    //                     className="image"
    //                     style={{
    //                       width: "3rem",
    //                       cursor: "pointer",
    //                       // top: "3",
    //                       marginTop: "25px",
    //                     }}
    //                   />
    //                   {/* </div> */}
    //                 </Box>
    //                 {/*  <Typography marginLeft={1} marginTop={3} variant="h5">
    //               Signed Edition
    //               </Typography> */}
    //                 <p> Signed Editions</p>
    //               </Box>
    //             </Box>
    //           </Grid>
    //         </Box>
    //       </div>{" "}
    //     </Slider>
    //   ) : (

    //  ""
    //   )}

    <div className="banner_box">
      {pics.map((p) => {
        return (
          <div className="banner_icon">
            <div>
              <img src={p.i} alt="banner-image" className="banner_img" />
            </div>

            <div className="banner_text">
              <text>{p.c}</text>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Banner
