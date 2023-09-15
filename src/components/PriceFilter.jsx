import { Slider, Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import styled from "@emotion/styled"
import useMediaQuery from "@mui/material/useMediaQuery"
import "./pricefilter.css"
import { setPriceFilter } from "../state"
import { useDispatch, useSelector } from "react-redux"
import "../theme.js"
import "./style.css"
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



  const handleChange = (event, newValue) => {
    const priceFilter = {
      minPrice: parseInt(newValue[0]),
      maxPrice: parseInt(newValue[1]),
    }
    dispatch(setPriceFilter(newValue))
    onPriceChange(priceFilter)
  }



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
      <Box display={"flex"}>

      </Box>


    </>
  )
}

export default PriceFilter
