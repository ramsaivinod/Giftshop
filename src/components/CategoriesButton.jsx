import React, { Fragment, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

import { setIsFilterOpen } from "../state";
import { setSortOrder } from "../state";
import { CATEGORIES_BUTTON } from "../utils/constants";

import "../styles/style.css";
import { AddOutlined } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

function CategoriesButton({
  onChange,
  value,
  languages,
  handleLanguageChange,
  categoryCheckboxFilter,
  setCategoryCheckboxFilter,
}) {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const [seeMore, setSeeMore] = useState(false);
  const itemsCategories = useSelector((state) => state.cart.itemsCategories);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    onChange(value);
  };

  const handleMobChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    dispatch(setIsFilterOpen({}));
    onChange(value);
  };

  return (
    <Fragment>
      <div className="flex justify-between mb-2">
        <p
          className="priceheading mt-4"
          style={{
            fontFamily: "Satoshi, sans-serif",
            color: "#645743",
            fontSize: 20,
          }}
        >
          {/* {CATEGORIES_BUTTON.CATEGORY} */}
          Format
        </p>
        <AddOutlined
          className="mt-4"
          fontSize="large"
          sx={{ color: "black", cursor: "pointer" }}
        />
      </div>

      {/* <FormControl component="fieldset">
        <RadioGroup
          aria-label="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={breakPoint ? handleMobChange : handleChange}
          column
        >
          {itemsCategories?.slice(0, !seeMore ? 5 : itemsCategories.length).map((item, index) => (
            (item !== "English" && item !== "Hindi" && item !== "Telugu" && item !== "Gujarati" && item !== "Marathi" && item !== "Odia") &&
            <FormControlLabel
              key={index}
              value={item}
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
                <Typography
                  variant="h5"
                  sx={{
                    marginRight: "36px",
                    fontSize: "15px",
                    fontFamily: "Satoshi, sans-serif",
                    color: "#645743",
                  }}
                >
                  {item}
                </Typography>
              }
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
        <p style={{
          alignSelf: "end",
          fontFamily: "Satoshi, sans-serif",
          fontSize: 12,
          fontWeight: 800,
          color: " #4795D8",
          cursor:"pointer"
        }}
        onClick={()=>{setSeeMore(!seeMore)}}>SEE {!seeMore ? "MORE" : "LESS"}</p>

      </FormControl> */}

      <FormControl component="fieldset" style={{width:"100%"}}>
        {categoryCheckboxFilter
          ?.slice(0, !seeMore ? 5 : categoryCheckboxFilter.length)
          .map(
            (item, index) =>
              item.name !== "English" &&
              item.name !== "Hindi" &&
              item.name !== "Telugu" &&
              item.name !== "Gujarati" &&
              item.name !== "Marathi" &&
              item.name !== "Odia" && (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={item.selected}
                      onChange={() => setCategoryCheckboxFilter(item)}
                      name={item.name}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "rgb(255, 109, 47)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="h5"
                      sx={{
                        marginRight: "36px",
                        fontSize: "15px",
                        fontFamily: "Satoshi, sans-serif",
                        color: "#645743",
                      }}
                    >
                      {item.name}
                    </Typography>
                  }
                  labelPlacement="end"
                />
              )
          )}
        <p
          style={{
            alignSelf: "end",
            fontFamily: "Satoshi, sans-serif",
            fontSize: 12,
            fontWeight: 800,
            color: " #4795D8",
            cursor: "pointer",
          }}
          onClick={() => {
            setSeeMore(!seeMore);
          }}
        >
          SEE {!seeMore ? "MORE" : "LESS"}
        </p>
      </FormControl>

      {/* Languages Below----------------------------------------------------------------- */}
      <div className="flex justify-between mb-2">
        <p
          className="priceheading mt-4"
          style={{
            fontFamily: "Satoshi, sans-serif",
            color: "#645743",
            fontSize: 20,
          }}
        >
          {/* {CATEGORIES_BUTTON.CATEGORY} */}
          Language
        </p>
        <AddOutlined
          className="mt-4"
          fontSize="large"
          sx={{ color: "black", cursor: "pointer" }}
        />
      </div>
      <FormControl component="fieldset">
        {languages?.map((item, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={item.selected}
                onChange={() => handleLanguageChange(index)}
                name={item.name}
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "rgb(255, 109, 47)",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="h5"
                sx={{
                  marginRight: "36px",
                  fontSize: "15px",
                  fontFamily: "Satoshi, sans-serif",
                  color: "#645743",
                }}
              >
                {item.name}
              </Typography>
            }
            labelPlacement="end"
          />
        ))}
      </FormControl>
    </Fragment>
  );
}

export default CategoriesButton;
