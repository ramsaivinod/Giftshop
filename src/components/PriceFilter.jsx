import { Slider, Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import styled from "@emotion/styled"
import useMediaQuery from "@mui/material/useMediaQuery"
import "../styles/pricefilter.css"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import { setPriceFilter } from "../state"
import { useDispatch, useSelector } from "react-redux"
import "../theme.js"
import "../styles/style.css"
const FlexBox = styled(Box)`
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
`

function PriceFilter({ onPriceChange, onClear }) {
  const value = useSelector((state) => state.cart.priceFilter)
  const breakPoint = useMediaQuery("(min-width:700px)")
  const [minPrice, setMinPrice] = useState(3)
  const [maxPrice, setMaxPrice] = useState(150)
  const dispatch = useDispatch()

  // const handlePriceChange = () => {
  //   const priceFilter = {
  //     minPrice: parseInt(minPrice),
  //     maxPrice: parseInt(maxPrice),
  //   };
  //   console.log(priceFilter,"pf")
  //   onPriceChange(priceFilter);
  // };

  const handleChange = (event, newValue) => {
    const priceFilter = {
      minPrice: parseInt(newValue[0]),
      maxPrice: parseInt(newValue[1]),
    }
    dispatch(setPriceFilter(newValue))
    onPriceChange(priceFilter)

    // setMinPrice(newValue[0]);
    // setMaxPrice(newValue[1]);
    //handlePriceChange();
  }

  // const clear=()=>{
  //     setValue([3, 100]);
  //     const priceFilter = {
  //       minPrice: 0,
  //       maxPrice: 100,
  //     };
  //     onPriceChange(priceFilter);

  // }

  function valuetext(value) {
    return `${value}°C`
  }
  return (
    <>
      <p


        className="filterTitle"
      >
        FILTERS
      </p>
      <p className="silders">
        <p
          className="priceheading"
        >

          PRICE FILTER
        </p>
        <p className="slidep"> <Slider
          size="large"
          getAriaLabel={() => "Temperature range"}
          defaultValue={3}
          getAriaValueText={valuetext}
          value={value}
          valueLabelDisplay="on"
          onChange={handleChange}
          min={3}
          max={150}
          sx={{ color: "#4795d8" }}
        /> </p>
      </p>

      {/*  */}

      {/* <Box>
        <Typography      textAlign={"left"}
        marginRight={"2em"}
        fontSize={"20px"}
        fontWeight={"bold"}> Sort By Ascending</Typography>
      </Box> */}
      <Box display={"flex"}>
        {/* <Button
          onClick={handlePriceChange}
          variant="contained"
          color="info"
          sx={{ marginLeft: "1em", marginBottom: breakPoint ? "3em" : "1em" ,fontWeight:"bold",marginRight:"1em"}}
        >
          Apply 
        </Button> */}
        {/* <Button
          onClick={clear}
          variant="contained"
          color="secondary"
          sx={{
            marginLeft: "0em",
            fontWeight: "bold",
            padding: "1em",
            marginBottom: breakPoint ? "3em" : "1em",
          }}
        >
          Clear
        </Button> */}
      </Box>

      {/* <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      /> */}

    </>
  )
}

export default PriceFilter
