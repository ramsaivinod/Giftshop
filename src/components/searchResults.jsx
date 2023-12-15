// Import statements for dependencies and components
import "../styles/style.css"; // Import CSS styles
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { Box, Typography, Button, IconButton } from "@mui/material"; // Import Material-UI components
import CancelIcon from "@mui/icons-material/Cancel"; // Import CancelIcon
import { useNavigate, useLocation, useParams } from "react-router-dom"; // Import useNavigate hook from React Router
import { encode as btoa } from "base-64"; // Import btoa function for base64 encoding
import React, { Fragment, useEffect, useState, useMemo, useRef } from "react"; // Import React and its hooks
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery hook

import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import "../styles/Navbar.css"; // Import Navbar styles
import "../App.css"; // Import global App styles
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"; // Import KeyboardDoubleArrowUpIcon
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"; // Import KeyboardDoubleArrowDownIcon
import TuneIcon from "@mui/icons-material/Tune"; // Import TuneIcon
import "react-dropdown/style.css"; // Import React Dropdown styles
import _ from "lodash"; // Import lodash library
import "../styles/Item2.css"; // Import Item2 styles

import SortRadioButtons from "./SortRadioButtons"; // Import SortRadioButtons component
import CategoriesButton from "./CategoriesButton"; // Import CategoriesButton component
import PriceFilter from "./PriceFilter"; // Import PriceFilter component
import {
  setItems,
  setPriceFilter,
  setSortOrder,
  setItemsCategories,
  setIsFilterOpen,
} from "../state"; // Import Redux actions
import Loader from "./Loader"; // Import Loader component
import NavMenu from "./NavMenu"; // Import NavMenu component
import Item2 from "./Item2"; // Import Item2 component
import { PRODUCT_CATEGORY } from "../utils/constants";
import NoResultFound from "./NoResultFound";

//SearchResults  component definition
const SearchResults = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);

  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const sortOrder = useSelector((state) => state.cart.sortOrder);

  const [item, setItem] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const breakPoint = useMediaQuery("(max-width:700px)");
  const breakPoint2 = useMediaQuery("(max-width:1220px)");
  const breakPoint3 = useMediaQuery("(max-width:530px)");
  const [show, setShow] = useState(false);
  const [view, setView] = useState(true);
  const [hide, setHide] = useState(true);
  const [asc, setAsc] = useState([]);
  const [dsc, setDsc] = useState([]);
  const params = useParams();
  const [category, setCategory] = useState(params.catName);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const allCategories = useSelector((state) => state.cart.itemsCategories);
  const [categoryCheckboxFilter, setCategoryCheckboxFilter] = useState([]);
  const [languages, setLanguages] = useState([
    { name: "English", selected: false },
    { name: "Hindi", selected: false },
    { name: "Telugu", selected: false },
    { name: "Gujarati", selected: false },
    { name: "Marathi", selected: false },
    { name: "Odia", selected: false },
  ]);
  const [sortType, setSortType] = useState(null);

  //   console.log("GLOBAL STATE CATEGORIES", allCategories);

  /**
   *
   * @obtaining values of category and searchInput from url
   */
  const categoryParams = queryParams.get("category");
  const searchInputParams = queryParams.get("searchInput");

  /**
   *
   * @useEffect to make a new array of categories used in filtering search results
   */
  // useEffect(() => {
  //   modifyCategoryForCheckbox();
  // }, [categoryParams, searchInputParams]);

  /**
   *
   * @useEffect to render page on updation of search params
   */
  useEffect(() => {
    modifyCategoryForCheckbox();
    getSearchResults();
  }, [categoryParams, searchInputParams]);

  /**
   *
   * @useEffect to apply filter changes on category or language selection
   */
  useEffect(() => {
    if (checkForCategoryCheckboxFilter() || checkForCategorylanguage()) {
      applyFilter();
    } else {
      setFilterItem([]);
    }
  }, [categoryCheckboxFilter, languages]);

  /**
   *
   * @useEffect to apply sorting changes at applied sorting on price i.e asc/desc
   */
  useEffect(() => {
    applySorting();
  }, [sortType]);

  /**
   *
   * @function to get search results based on searchparams which includes category and SearchInput params
   */
  const getSearchResults = () => {
    setLoading(true);
    if (categoryParams !== "none") filterByCategoryParams();
    else filterBySearchInputParams();
  };

  /**
   *
   * @function to modify category in order to use for filter logic
   */
  const modifyCategoryForCheckbox = () => {
    // console.log("into search by modified-category");
    const newCategory = allCategories.map((item) => ({
      name: item,
      selected: false,
    }));
    setCategoryCheckboxFilter(newCategory);
  };

  /**
   *
   * @filter items based on category params
   */
  const filterByCategoryParams = () => {
    // console.log("into search by category");
    const filteredItems = items.filter((item) => {
      return item.tags && item.tags.includes(categoryParams);
    });

    setItem(filteredItems.length > 0 ? filteredItems : null);
    setLoading(false);
  };

  /**
   *
   * @filter items based on search input params
   */
  const filterBySearchInputParams = () => {
    // console.log("into search by input");
    const lowerCaseCategory = searchInputParams.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.tags
        .split(",")
        .some((tag) => tag.trim().toLowerCase().includes(lowerCaseCategory))
    );
    setItem(filteredItems.length > 0 ? filteredItems : null);
    setLoading(false);
  };

  /**
   *
   * @applyFilter based on category and language selection
   */
  const applyFilter = () => {
    // console.log("into filter");
    const combinedArray = [...categoryCheckboxFilter, ...languages].filter(
      (item, index, array) => {
        return (
          item.selected &&
          array.findIndex((el) => el.name === item.name && el.selected) ===
            index
        );
      }
    );
    // console.log("combinedArray", combinedArray);
    if (item !== null) {
      const filteredItems = item.filter((item) => {
        return combinedArray.every((el) => item.tags.includes(el.name));
      });
      setFilterItem(filteredItems.length > 0 ? filteredItems : null);
    }
  };

  /**
   *
   * @applySorting based on value of sorting type i.e asc/desc/null
   */
  const applySorting = () => {
    // console.log("into sorting");
    if (sortType === null) {
      // setFilterItem(
      //   (filterItem !== null && filterItem.length) > 0 ? [...filterItem] : []
      // );
      return;
    }
    let sortedItems =
      checkForCategoryCheckboxFilter() || checkForCategorylanguage()
        ? [...filterItem]
        : [...item];
    sortedItems.sort((a, b) => {
      const priceA = parseFloat(a.variants[0].price);
      const priceB = parseFloat(b.variants[0].price);
      return sortType === "asc" ? priceA - priceB : priceB - priceA;
    });
    checkForCategoryCheckboxFilter() || checkForCategorylanguage()
      ? setFilterItem(sortedItems)
      : setItem(sortedItems);
  };

  /**
   *
   * @function to update category checkbox state in filter panel in search result page
   */
  const onChangeCategoryCheckboxFilter = (item) => {
    setCategoryCheckboxFilter((prevState) =>
      prevState.map((category) =>
        category.name === item.name
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  /**
   *
   * @function to update language checkbox state in filter panel in search result page
   */
  const handleLanguageChange = (index) => {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].selected = !newLanguages[index].selected;
      return newLanguages;
    });
  };

  /**
   *
   * @function to check if any category is selected
   */
  const checkForCategoryCheckboxFilter = () => {
    return categoryCheckboxFilter.some((item) => item.selected);
  };

  /**
   *
   * @function to check if any language is selected
   */
  const checkForCategorylanguage = () => {
    return languages.some((item) => item.selected);
  };

  /**
   *
   * @function to update sorting order change i.e. price low to high or high to low
   */
  const handleSortOrderChange = (value) => {
    setSortType(value);
  };

  /**
   *
   * @function to update filteredItems on change of price filter
   */
  const handlePriceFilter = (priceFilter) => {
    // console.log(priceFilter);
    const selectedFilters = [...categoryCheckboxFilter, ...languages].filter(
      (item) => item.selected
    );
    const filteredItems = [...item].filter((item) => {
      const isWithinSelectedFilters =
        selectedFilters.length === 0 ||
        selectedFilters.every((el) => item.tags.includes(el.name));
      const isWithinPriceRange =
        item.variants[0].price >= priceFilter.minPrice &&
        item.variants[0].price <= priceFilter.maxPrice;
      return isWithinSelectedFilters && isWithinPriceRange;
    });
    setFilterItem(filteredItems.length > 0 ? filteredItems : null);
  };

  // Function to handle category change
  const handleCategoriesChange = (value) => {
    setCategory(value);
    setHide(false);
  };

  // Function to clear filters
  const clearFilter = () => {
    dispatch(setPriceFilter([3, 150]));
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    };
    handlePriceFilter(priceFilter);
    handleCategoriesChange("All Products");
    dispatch(setSortOrder(""));
  };

  // Function to clear mobile filters
  const clearMobFilter = () => {
    dispatch(setPriceFilter([3, 150]));
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    };
    handlePriceFilter(priceFilter);
    handleCategoriesChange("All Products");
    dispatch(setIsFilterOpen({}));
    dispatch(setSortOrder(""));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : item !== null ? (
        <>
          <Fragment>
            <Box width="100%" m="80px auto">
              <NavMenu navFromTop={true} />
              <div className="container">
                {/* Filter Button Display Logic */}
                {breakPoint2 && value === "All" && (
                  <Box
                    display="flex"
                    alignContent="flex-end"
                    sx={{
                      height: "32px",
                      borderRadius: "5px",
                      background: "#ffdd93",
                      margin: "0 10px 2rem 0",
                      padding: "10px 5px",
                      fontSize: "20px",
                    }}
                  >
                    <Button onClick={() => dispatch(setIsFilterOpen({}))}>
                      <TuneIcon
                        sx={{ cursor: "pointer", width: "40%" }}
                        fontSize="large"
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontFamily="Satoshi, sans-serif"
                      >
                        {PRODUCT_CATEGORY.TITLE}
                      </Typography>
                    </Button>
                  </Box>
                )}

                {/* Product Heading Logic */}
                {filterItem !== null && filterItem.length === 0 && (
                  <p className="allproductheading">
                    {item !== null && item.length > 0
                      ? `Showing ${item.length} Results for "${
                          categoryParams === "none"
                            ? searchInputParams
                            : categoryParams
                        }"`
                      : "Loading Results ....."}
                  </p>
                )}
                {filterItem !== null && filterItem.length > 0 && (
                  <p className="allproductheading">
                    {`Showing ${filterItem.length} Results for Applied Filter`}
                  </p>
                )}

                {/* Main Content Area */}
                <Box display="flex">
                  <Box
                    className="filter-sidebar"
                    sx={{
                      width: "300px",
                      border: "1px solid #ccc",
                      display: breakPoint2 ? "none" : "",

                      height: "fit-content",
                    }}
                  >
                    {/* Filter Components */}
                    <PriceFilter onPriceChange={handlePriceFilter} />{" "}
                    <div style={{ margin: "0 20px 20px 20px" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <SortRadioButtons
                          onChange={handleSortOrderChange}
                          value={sortType}
                        />
                        <CategoriesButton
                          onChange={handleCategoriesChange}
                          value={category}
                          languages={languages}
                          handleLanguageChange={handleLanguageChange}
                          categoryCheckboxFilter={categoryCheckboxFilter}
                          setCategoryCheckboxFilter={
                            onChangeCategoryCheckboxFilter
                          }
                        />
                        <Button
                          onClick={() => clearFilter()}
                          variant="contained"
                          sx={{
                            marginLeft: "0em",
                            fontWeight: "bold",
                            fontSize: "1em",
                            padding: ".7em",
                            marginBottom: breakPoint2 ? "3em" : "1em",
                            fontFamily: "Rubik",
                            background: "#EF6F1F",
                            marginTop: "1em",
                          }}
                        >
                          <strong>{PRODUCT_CATEGORY.CLEAR_FILTER}</strong>
                        </Button>
                      </div>
                    </div>
                  </Box>

                  {/* Product Listing */}
                  <Box
                    width={breakPoint2 ? "100%" : "70%"}
                    // maxHeight={item?.length > 3 ? "auto" : "220px"}
                    marginTop={breakPoint2 ? "10px" : "0"}
                    display={
                      filterItem === null
                        ? "flex"
                        : breakPoint3
                        ? "block"
                        : "grid"
                    }
                    gridTemplateColumns={
                      breakPoint
                        ? "repeat(auto-fill, 250px)"
                        : "repeat(auto-fill, 210px)"
                    }
                    justifyContent="space-around"
                    // rowGap={breakPoint ? "25px" : "40px"}
                    rowGap="25px"
                    columnGap="2%"
                  >
                    {filterItem === null
                      ? item.length > 0 && <NoResultFound type={"filter"} />
                      : filterItem.length === 0
                      ? item.map((item) => (
                          <Item2 item={item} key={`${item.title}-${item.id}`} />
                        ))
                      : filterItem.map((item) => (
                          <Item2 item={item} key={`${item.title}-${item.id}`} />
                        ))}
                  </Box>
                </Box>

                {/* desktop filter end */}
                {/* <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      display: hide && value === "All" ? "" : "none",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      background: "#EF6F1F",
                    }}
                    onClick={() => setView(!view)}
                    variant={"contained"}
                  >
                    SHOW {view ? "ALL" : "LESS"}{" "}
                    {view ? (
                      <KeyboardDoubleArrowDownIcon />
                    ) : (
                      <KeyboardDoubleArrowUpIcon />
                    )}
                  </Button>
                </div> */}
              </div>
            </Box>

            {/* mobile filter start */}
            <Box
              display={isFilterOpen ? "block" : "none"}
              // backgroundColor="rgba(0, 0, 0, 0.4)"
              position="fixed"
              zIndex={99}
              width="100%"
              height="100%"
              left="0"
              top="0"
              overflow="auto"
              backgroundColor="#fff"
            >
              <Box overflow="auto" height="100%">
                <IconButton
                  onClick={() => dispatch(setIsFilterOpen({}))}
                  style={{ position: "absolute", right: "0", margin: "5px" }}
                >
                  <CancelIcon fontSize="large" />
                </IconButton>
                <Box className="filter-sidebar" padding="30px" marginTop="10px">
                  <PriceFilter onPriceChange={handlePriceFilter} />
                  <div style={{ margin: "0 15px" }}>
                    <SortRadioButtons
                      onChange={handleSortOrderChange}
                      value={sortType}
                    />
                    <CategoriesButton
                      onChange={handleCategoriesChange}
                      value={category}
                      languages={languages}
                      handleLanguageChange={handleLanguageChange}
                      categoryCheckboxFilter={categoryCheckboxFilter}
                      setCategoryCheckboxFilter={onChangeCategoryCheckboxFilter}
                    />
                    {/* <Button
                      onClick={
                        breakPoint2
                          ? () => clearMobFilter()
                          : () => clearFilter()
                      }
                      variant="contained"
                      //color="secondary"
                      sx={{
                        marginLeft: "0em",
                        fontWeight: "bold",
                        fontSize: "1em",
                        padding: "1em",
                        marginBottom: breakPoint2 ? "3em" : "1em",
                        fontFamily: "Rubik",
                      }}
                    >
                      <strong>{PRODUCT_CATEGORY.CLEAR}</strong>
                    </Button> */}
                  </div>
                </Box>
              </Box>
            </Box>
            {/*  mobile filter end */}
          </Fragment>
        </>
      ) : (
        <>
          <NoResultFound type={"search"} />
        </>
      )}
    </>
  );
};

export default SearchResults;
