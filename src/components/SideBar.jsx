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
     
      className="sidebarmenu"
    >
 
     
        <Box   overflow="auto" height="100%" padding="20px">
      
            <IconButton onClick={() => dispatch(setIsNavOpen({}))} style={{position:"absolute",right:0, color:"#fff"}} >
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
              display:"none"
              },
            }}
            sx={{
            
              //display: breakPoint2 ? "none" : "block",
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
                "& .MuiTab-root.Mui-selected": {
                  color: "#fff",
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




  );
};

export default SideBar;
