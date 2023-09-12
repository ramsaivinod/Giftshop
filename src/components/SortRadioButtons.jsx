import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { setSortOrder } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterOpen } from "../state";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";

function SortRadioButtons({ onChange, value }) {
  //const [sortOrder, setSortOrder] = useState(value);
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    //dispatch(setIsFilterOpen({}))
    onChange(value);
    console.log(value, "value");
  };
  const handleMobChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    dispatch(setIsFilterOpen({}));
    onChange(value);
  };
  return (
    <>
      <p
        className="priceheading"
      >
        SORT BY
      </p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={breakPoint ? handleMobChange : handleChange}
          row

        >
          <FormControlLabel
            value="asc"
            control={
              <Radio
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "rgb(255, 109, 47)",
                  },
                }}
              />
            }
            label={
              <Typography variant="h5" fontFamily={"QuickSand"} style={{ fontSize: "15px" }}>

                Price <b>Low</b> to <b>High </b> <ArrowUpwardIcon />
              </Typography>
            }
            labelPlacement="end"
          />
          <FormControlLabel
            value="desc"
            control={
              <Radio
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "rgb(255, 109, 47)",
                  },
                }}
              />
            }
            label={
              <Typography variant="h5" fontFamily={"QuickSand"} style={{ fontSize: "15px" }}>

                Price <b> High</b> to <b>Low</b> <ArrowDownwardIcon />
              </Typography>
            }
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default SortRadioButtons;
