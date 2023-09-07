import { useState } from "react";
//import './App.css';
import { rateProduct } from "../state";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Stars() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (






    <div style={styles.container}>
      <h2> Give Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default Stars;


import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const tabOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const MyTabs = () => {
  const [value, setValue] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('option1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      <Select value={selectedOption} onChange={handleOptionChange}>
        {tabOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MyTabs;


import React, { useState } from 'react';
import { Tabs, Tab, Menu, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DropdownTabs() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="standard"
      >
        <Tab label="Tab 1" />
        <Tab
          label={
            <>
              Tab 2{' '}
              <IconButton size="small" onClick={handleClick}>
                <ArrowDropDownIcon />
              </IconButton>
            </>
          }
        />
        <Tab label="Tab 3" />
      </Tabs>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => { handleClose(); setValue(1); }}>Option 1</MenuItem>
        <MenuItem onClick={() => { handleClose(); setValue(2); }}>Option 2</MenuItem>
        <MenuItem onClick={() => { handleClose(); setValue(3); }}>Option 3</MenuItem>
      </Menu>
    </>
  );
}

export default DropdownTabs;

import React, { useState } from 'react';
import { Tabs, Tab, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
    // Do something with the selected value
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs">
        <Tab label="Tab 1" value={0} />
        <Tab label="Tab 2" value={1} />
        <Tab label="Tab 3" value={2} />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="dropdown-label-1">Dropdown 1</InputLabel>
            <Select labelId="dropdown-label-1" id="dropdown-1" onChange={handleDropdownChange}>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </FormControl>
        )}
        {value === 1 && (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="dropdown-label-2">Dropdown 2</InputLabel>
            <Select labelId="dropdown-label-2" id="dropdown-2" onChange={handleDropdownChange}>
              <MenuItem value={4}>Option 4</MenuItem>
              <MenuItem value={5}>Option 5</MenuItem>
              <MenuItem value={6}>Option 6</MenuItem>
            </Select>
          </FormControl>
        )}
        {value === 2 && (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="dropdown-label-3">Dropdown 3</InputLabel>
            <Select labelId="dropdown-label-3" id="dropdown-3" onChange={handleDropdownChange}>
              <MenuItem value={7}>Option 7</MenuItem>
              <MenuItem value={8}>Option 8</MenuItem>
              <MenuItem value={9}>Option 9</MenuItem>
            </Select>
          </FormControl>
        )}
      </Box>
    </Box>
  );
};

export default DropdownTabs;
