import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import styled from "@emotion/styled";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab"
//import useMediaQuery from "@mui/material/useMediaQuery";
import {
  setIsNavOpen,
  setValue
} from "../state";
import PriceFilter from "./PriceFilter";

const FilterBar = () => {
    const dispatch = useDispatch();
    //   const breakPoint = useMediaQuery("(max-width:700px)");
    //   const breakPoint2 = useMediaQuery("(max-width:1000px)");
      const value = useSelector((state) => state.cart.value);
      const isNavOpen = useSelector((state) => state.cart.isNavOpen);
      const handleChange = (event, newValue) => {
        dispatch(setValue(newValue));
      };


 
      return (
    
        <Box
          display={isNavOpen ? "block" : "none"}
         // backgroundColor="rgba(0, 0, 0, 0.4)"
          position="fixed"
          zIndex={10}
          width="30%"
          height="30%"
          left="0"
          top="0"
          overflow="auto"
        >
          <Box
            position="fixed"
            left="0"
            bottom="0"
            width="max(400px, 30%)"
            height="100%"
            backgroundColor="white"
          >
            <Box padding="30px" overflow="auto" height="100%" >
          
                <IconButton onClick={() => dispatch(setIsNavOpen({}))} >
                <CancelIcon/>
                </IconButton>

         
              </Box>
          </Box>
        </Box>
    
    
    
    
      );
}

export default FilterBar