import React, { useEffect, useState, Fragment } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { setSortOrder } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterOpen } from "../state";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
import { fetchDataFromApi } from "../utils/api";
import { ConstructionOutlined } from "@mui/icons-material";

function CategoriesButton({ onChange, value }) {
  //const [sortOrder, setSortOrder] = useState(value);
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const [resp, setRes] = useState([])
  // const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);


  const itemsCategories = useSelector((state) => state.cart.itemsCategories);


  useEffect(() => {
    getCategories()
  }, [])


  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value, "val")
    dispatch(setSortOrder(value));
    // dispatch(setIsFilterOpen({}))
    onChange(value);
  };

  const handleMobChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    dispatch(setIsFilterOpen({}));
    onChange(value);
  };

  const getCategories = async () => {
    try {
      const resp = await fetchDataFromApi("/api/categories?populate=*");
      if (resp) {
        setRes(resp?.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }

    // 'categoriesData' is not available here immediately after calling 'fetchDataFromApi'

    // You can perform other operations here, but avoid relying on 'categoriesData' at this point
  };

  //   resp.map((item, index) => 
  // console.log(item.attributes.Type,"types")
  //   )


  return (
    <Fragment>
      <p
        className="priceheading mt-4"
      >
        CATEGORY
      </p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={breakPoint ? handleMobChange : handleChange}
          row

        >
          {itemsCategories.map((item, index) => (
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
                <Typography variant="h5" fontFamily={"QuickSand"} sx={{ marginRight: "36px", fontSize: "15px" }}>
                  {item}
                </Typography>
              }
              labelPlacement="end"
            />
          ))}
          {/* <FormControlLabel
            value="All Products"
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
              <Typography variant="h5" fontFamily={"Lora"}>
                {" "}
                All Products{" "}
              </Typography>
            }
            labelPlacement="end"
          />

          <FormControlLabel
            value="englishbooks"
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
              <Typography variant="h5" fontFamily={"Lora"}>
                English Books
              </Typography>
            }
            labelPlacement="end"
          />

          <FormControlLabel
            value="swamijikirtans"
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
              <Typography variant="h5" fontFamily={"Lora"}>
                {" "}
                SwamiJi Kirtans
              </Typography>
            }
            labelPlacement="end"
          />

          <FormControlLabel
            value="BalMukundBooks"
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
              <Typography variant="h5" fontFamily={"Lora"}>
                Bal Mukund Books
              </Typography>
            }
            labelPlacement="end"
          />

          <FormControlLabel
            value="EnglishLectures"
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
              <Typography variant="h5" fontFamily={"Lora"}>
                English Lectures
              </Typography>
            }
            labelPlacement="end"
          /> */}

          {/* <FormControlLabel
            value="Videos"
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
              <Typography variant="h5" fontFamily={"Lora"}>
               Videos
              </Typography>
            }
            labelPlacement="end"
          /> */}
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}

export default CategoriesButton;
