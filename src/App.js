import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ItemDetails from "./components/ItemDetails"
import CartMenu from "./components/CartMenu"
import SideBar from "./components/SideBar"
import Checkout from "./checkout/Checkout"
import Confirmation from "./checkout/Confirmation"
import { useEffect } from "react"
import Subscribe from "./components/Subscribe"
import { Button } from "@mui/material"
import Thank from "./components/Thank"
import { SnackbarProvider, enqueueSnackbar } from "notistack"
import ScrollToTop from "react-scroll-to-top"
import Collections from "./components/Collections"
import QuickView from "./components/QuickView"
import Ticket from "./components/Ticket"
import { Suspense, lazy } from "react"

// const Navbar = lazy(() => import("./components/Navbar"));
// const ItemDetails = lazy(() => import("./components/ItemDetails"));
// const Collections = lazy(() => import("./components/Collections"));
// const Checkout = lazy(() => import("./checkout/Checkout"));
// const Thank = lazy(() => import("./components/Thank"));
// const Confirmation = lazy(() => import("./checkout/Confirmation"));
// const Ticket = lazy(() => import("./components/Ticket"));
// const QuickView = lazy(() => import("./components/QuickView"));
// const CartMenu = lazy(() => import("./components/CartMenu"));
// const SideBar = lazy(() => import("./components/SideBar"));
// const Footer = lazy(() => import("./components/Footer"));

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  //''
  return (
    <div>
      <div
        className="App"
        style={
          {
            // background:
            //   "linear-gradient(180deg, rgba(247,240,222,1) 0%, rgba(246,235,225,1) 35%, rgba(255,255,255,1) 100%)",
          }
        }
      >
        <BrowserRouter basename="/giftshop">
          {/* <Suspense fallback={<div> Loading...</div>}> */}

          <SnackbarProvider
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            variant={"success"}
            autoHideDuration={1000}
          />

          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="collection/:collectionId" element={<Collections />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="thank" element={<Thank />} />
            <Route path="checkout/success" element={<Confirmation />} />
            <Route path="coupon" element={<Ticket />} />
          </Routes>
          {/* </Suspense> */}
          <CartMenu />
          <QuickView />
          <SideBar />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
