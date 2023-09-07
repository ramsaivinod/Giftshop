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


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBar = () => {
  const dispatch = useDispatch();
//   const breakPoint = useMediaQuery("(max-width:700px)");
//   const breakPoint2 = useMediaQuery("(max-width:1000px)");
  const value = useSelector((state) => state.cart.value);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);


  const handleChange = (event, newValue) => {
    dispatch(setValue(newValue));
    window.scrollTo(0,0)

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
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%" >
      
            <IconButton onClick={() => dispatch(setIsNavOpen({}))} >
            <CancelIcon/>
            </IconButton>
        <Tabs
            textColor="primary"
            indicatorColor="green"
            value={value}
            orientation="vertical"
            onChange={handleChange}
            centered
            scrollButtons="auto"
            TabIndicatorProps={{
              sx: {
                //display: breakPoint ? "block" : "none",
                background: "orange",
              },
            }}
            sx={{
              m: "25px",
              //display: breakPoint2 ? "none" : "block",
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
                "& .MuiTab-root.Mui-selected": {
                  color: "rgb(247 127 16)",
                },
              },
            }}
          >
            <Tab
              label="ALL"
              value="All"
              style={{
                fontSize: "1rem",
                fontWeight:"bold"
              }}
              onClick={() => dispatch(setIsNavOpen({}))} 
         
            />
            <Tab
              label="SWAMIJI KIRTANS"
              value="Swamiji Kirtans"
              style={{
                fontSize: "1rem",
                fontWeight:"bold"
              }}
              onClick={() => dispatch(setIsNavOpen({}))} 
          
            />
            <Tab
              label="ENGLISH BOOKS"
              value="English Books"
              style={{
                fontSize: "1rem",
                fontWeight:"bold"
                
              }}
              onClick={() => dispatch(setIsNavOpen({}))} 
           
            />
            <Tab
              label="BAL MUKUND BOOKS"
              value="Bal Mukund Books"
              style={{
                fontSize: "1rem",
                fontWeight:"bold"
              }}
              onClick={() => dispatch(setIsNavOpen({}))} 
          
            />
            <Tab
              label="ENGLISH LECTURES"
              value="English Lectures"
              style={{
                fontSize: "1rem",
                fontWeight:"bold"
              }}
              onClick={() => dispatch(setIsNavOpen({}))} 
        
            />
          </Tabs>
          </Box>
      </Box>
    </Box>




  );
};

export default SideBar;
