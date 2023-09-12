import { useDispatch, useSelector } from 'react-redux';
import {  Box, Typography, Button} from '@mui/material';
import Item from './Item';
import { makeStyles } from 'tss-react/mui';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { encode as btoa } from 'base-64';
import { setItems, setValue, setPriceFilter, setSortOrder, setItemsCategories } from '../state';
import React, { Fragment, useEffect, useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Navbar.css';
import '../App.css';
import PriceFilter from './PriceFilter';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styled from '@emotion/styled';
import SortRadioButtons from './SortRadioButtons';
import CategoriesButton from './CategoriesButton';
import TuneIcon from '@mui/icons-material/Tune';
import 'react-dropdown/style.css';
import { fetchDataFromApi } from '../utils/api';
import _ from 'lodash';
import '../styles/Item2.css';
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import NavMenu from './NavMenu';


const ProductCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);
  const cart = useSelector((state) => state.cart.cart);

  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const itemsCategories = useSelector((state) => state.cart.itemsCategories);
  const [item, setItem] = useState([]);
  const breakPoint = useMediaQuery('(max-width:700px)');
  const breakPoint2 = useMediaQuery('(max-width:1220px)');
  const breakPoint3 = useMediaQuery('(min-width:1220px)');
  const [search, setSearchField] = useState('');
  const [menu, setMenu] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [view, setView] = useState(true);
  const [hide, setHide] = useState(true);
  const [asc, setAsc] = useState([]);
  const [dsc, setDsc] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  //const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState('All Products');
  const [collections, setCollections] = useState([]);
  const [name, setName] = useState('All');
  const [val, setVal] = useState('');
  const [categories, setCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [count, setCount] = useState(1);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };



  const getData = async () => {
    try {
      navigate(`/category/${params.catName}`);
      setId(params.catName);

      if (updateditem.tags === 'POS' || updateditem.tags === '' || updateditem.tags === undefined) {
        dispatch(setValue('All'));
      } else {
        dispatch(setValue(updateditem[0].tags));
      }

      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err, 'this is error');
    }
  };

  const updateditem = item.filter((d) => {
    // eslint-disable-next-line
    return d.id == i;
  });

  if (updateditem) {
    if (updateditem[0]?.tags === 'POS' || updateditem[0]?.tags === '' || updateditem[0]?.tags === undefined) {
      dispatch(setValue('All'));
    } else if (updateditem[0].tags === 'English Lectures-Swamiji (Audio)') {
      dispatch(setValue('English Lectures'));
    } else if (updateditem[0].tags === 'BalMukund Books') {
      dispatch(setValue('Bal Mukund Books'));
    } else if (updateditem[0].tags === 'Videos') {
      dispatch(setValue('Videos'));
    } else {
      dispatch(setValue(updateditem[0].tags));
    }
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    width: '100%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          width: '100%',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          width: '60%',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          width: '40%',
          dots: false,
        },
      },
    ],
  };


  
  const getCategories = () => {
    fetchDataFromApi('/api/categories').then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  const options = ['one', 'two', 'three'];
  const defaultOption = options[0];

  const handleSearch = (id) => {
    console.log(id, 'id');
  };

  useEffect(()=>{
      setItem(productByCategory);
      setCategory(category);
      setHide(false);
  },[category]);

  const handleDropdownChange = (event) => {
    window.scrollTo({ top: 2300, behavior: 'smooth' });
    dispatch(setSortOrder(event.target.value));
    setVal(event.target.value);
    if (event.target.value === 'All Products' || '') {
      setItem(items);
      setCategory('All Products');
      setHide(true);
    } else if (event.target.value === 'SwamijiKirtans') {
      setItem(SwamijiKirtans);
      setCategory('Swamiji Kirtans');
      setHide(false);
    } else if (event.target.value === 'EnglishLectures') {
      setItem(EnglishLectures);
      setCategory('English Lectures');
      setHide(false);
    } else if (event.target.value === 'BalMukundBooks') {
      setItem(BalMukundBooks);
      setCategory('Bal Mukund Books');
      setHide(false);
    } else if (event.target.value === 'englishbooks') {
      setItem(englishbooks);
      setCategory('English Books');
      setHide(false);
    } else if (event.target.value === 'Videos') {
      setItem(Videos);
      setCategory('Videos');
      setHide(false);
    }
    // Do something with the selected value
  };

  async function getItems() {
    try {
      var headers = new Headers();
      headers.append(
        'Authorization',
        'Basic ' + btoa('ce9a3ad16708f3eb4795659e809971c4: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'),
      );
      //https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products
      // "http://localhost:5000/products.json?limit=250",

      const result = await fetch('https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products', {
        headers: headers,
      });

      const resp = await result.json();

      if (resp) {
        // get categorey
        let listCat = [
          ...new Set(
            resp?.products
              ?.filter((item) => item?.tags)
              .map((item) => {
                return item?.tags;
              }),
          ),
        ];
        dispatch(setItemsCategories(listCat));

        console.log(resp);
        setItem(resp?.products);
        dispatch(setItems(resp?.products));
        console.log(resp?.products, 'res');
        let arr = resp?.products;
        let arr2 = resp?.products;
        arr = arr.slice().sort((a, b) => a.variants[0].price - b.variants[0].price);
        arr2 = arr2.slice().sort((a, b) => b.variants[0].price - a.variants[0].price);
        setAsc(arr);
        setDsc(arr2);
      }
    } catch (err) {
      console.log(err, 'this is error');
    }
  }

  useEffect(() => {
    setCategory(params.catName);
   // getItems();
    //getData();
    getCategories();
    // getCollections();
  }, []);

  const handleChange = (event, value) => {
    dispatch(setSortOrder(value));
    window.scrollTo({ top: 2300, behavior: 'smooth' });
    if (value === 'All Products' || '') {
      setItem(items);
      setCategory('All Products');
      setHide(true);
    } else if (value === 'SwamijiKirtans') {
      setItem(SwamijiKirtans);
      setCategory('Swamiji Kirtans');
      setHide(false);
    } else if (value === 'EnglishLectures') {
      setItem(EnglishLectures);
      setCategory('English Lectures');
      setHide(false);
    } else if (value === 'BalMukundBooks') {
      setItem(BalMukundBooks);
      setCategory('Bal Mukund Books');
      setHide(false);
    } else if (value === 'englishbooks') {
      setItem(englishbooks);
      setCategory('English Books');
      setHide(false);
    } else if (value === 'Videos') {
      setItem(Videos);
      setCategory('Videos');
      setHide(false);
    }
  };
  // dispatch(setValue(newValue));

  const handlePriceFilter = (priceFilter) => {
    const filtered = asc.filter(
      (product) =>
        (priceFilter.minPrice === '' || product.variants[0].price >= priceFilter.minPrice) &&
        (priceFilter.maxPrice === '' || product.variants[0].price <= priceFilter.maxPrice),
    );
    if (priceFilter.minPrice === 3 && priceFilter.maxPrice === 150) {
      setHide(true);
    } else {
      setHide(false);
    }
    //setFilteredProducts(filtered);
    setItem(filtered);
  };

  useMemo(() => {
    const filtered = items.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    setItem(filtered);
  }, [items, search]);

  const handleSearchField = (e) => {
    // itemsCategories

    setSearchField(e.target.value);
    window.scrollTo({ top: 2300, behavior: 'smooth' });
    setHide(false);
    setCategory('Products');
    if (e.target.value === '') {
      setHide(true);
      getItems();
    }
  };

  var fruitArrays = {};
  console.log(categories);
  if (categories) {
    for (var i = 0; i < categories.length; i++) {
      const a = items.filter((item) => item.tags === categories[i].attributes.Type);
      fruitArrays[categories[i].attributes.Type] = [a];
    }
  }

  const productByCategory = items.filter((item) => item.tags === category);

  const englishbooks = items.filter((item) => item.tags === 'English Books');
  const newArrivalsItems = items.filter((item) => item.tags === 'POS');
  const bestSellersItems = items.filter((item) => item.tags === '');
  const SwamijiKirtans = items.filter((item) => item.tags === 'Swamiji Kirtans');
  const BalMukundBooks = items.filter((item) => item.tags === 'BalMukund Books');
  const EnglishLectures = items.filter((item) => item.tags === 'English Lectures-Swamiji (Audio)');
  const Videos = items.filter((item) => item.tags === 'Videos');

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    // width: "90%",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          // width: "80%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          // width: "80%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // width: "60%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // width: "40%",
          dots: false,
        },
      },
    ],
  };

  const change = () => {
    dispatch(setValue('All'));
    window.scrollTo(0, 0);
  };

  const handleSortOrderChange = (value) => {
    if (value === 'asc') {
      setItem(asc);
      setHide(false);
    }
    if (value === 'desc') {
      setItem(dsc);
      setHide(false);
    }
  };

  const handleCategoriesChange = (value) => {
      setCategory(value);
      setHide(false);
  };

  const clearFilter = () => {
    dispatch(setPriceFilter([3, 150]));
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    };
    handlePriceFilter(priceFilter);
    handleCategoriesChange('All Products');
    dispatch(setSortOrder(''));
  };

  const clearMobFilter = () => {
    dispatch(setPriceFilter([3, 150]));
    const priceFilter = {
      minPrice: 3,
      maxPrice: 150,
    };
    handlePriceFilter(priceFilter);
    handleCategoriesChange('All Products');
    dispatch(setIsFilterOpen({}));
    dispatch(setSortOrder(''));
  };


  const styles = makeStyles((theme) => ({
    select: {
      '&:before': {
        borderColor: '',
      },
      '&:after': {
        borderColor: '',
      },
    },
    icon: {
      right: '0px',
      background: 'red',
    },
  }));
  const classes = styles();

  useEffect(() => {
    console.log('itemsCategories', itemsCategories);
  }, [itemsCategories]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Box width="100%" m="80px auto"  className="">
              <NavMenu navFromTop={true} />
              <div className="container">
                {value === 'All' ? (
                  <p className="allproductheading">{category}</p>
                ) : (
                  <p className="allproductheading">{value}</p>
                )}

                {/* <Button variant="outlined" sx={{marginLeft:"2em",marginTop:"0em"}} onClick={clear}> Clear Filter</Button> */}
                {/**mobile filter start */}
                <Box
                  display={breakPoint2 && value === 'All' ? 'flex' : 'none'}
                  alignContent={'flex-end'}
                  sx={{
                    height: '32px',

                    borderRadius: '5px',
                    background: '#ffdd93',
                    margin: '0 10px',
                    padding: '10px 5px',
                    fontSize: '20px',
                  }}>
                  <Button onClick={() => dispatch(setIsFilterOpen({}))}>
                    <TuneIcon sx={{ cursor: 'pointer', width: '40%' }} fontSize="large" />
                    <Typography variant="h5" fontWeight="bold" fontFamily="HeuristicaRegular">
                      Filters
                    </Typography>
                  </Button>
                </Box>
                <Box display="flex">
                  <Box
                    className="filter-sidebar"
                    sx={{
                      width: '300px',
                      border: '1px solid #ccc',
                      display: breakPoint2 ? 'none' : '',

                      height: 'fit-content',
                    }}>
                    <PriceFilter onPriceChange={handlePriceFilter} />{' '}
                    <div style={{ margin: '0 20px 20px 20px' }}>
                      <div>
                        <SortRadioButtons onChange={handleSortOrderChange} value={sortOrder} />
                        <CategoriesButton onChange={handleCategoriesChange} value={sortOrder} />
                        <Button
                          onClick={() => clearFilter()}
                          variant="contained"
                          sx={{
                            marginLeft: '0em',
                            fontWeight: 'bold',
                            fontSize: '1em',
                            padding: '.7em',
                            marginBottom: breakPoint2 ? '3em' : '1em',
                            fontFamily: 'Rubik',
                            background: '#ff6d2f',
                            marginTop: '1em',
                          }}>
                          <strong> Clear Filter</strong>
                        </Button>
                      </div>
                    </div>
                  </Box>

                  <Box
                    width={breakPoint2 ? '100%' : '70%'}
                    margin="20px auto"
                    display="grid"
                    gridTemplateColumns={breakPoint ? 'repeat(auto-fill, 170px)' : 'repeat(auto-fill, 270px)'}
                    justifyContent="space-around"
                    rowGap={breakPoint ? '25px' : '40px'}
                    columnGap="2%">
                    {value === 'All' &&
                      (hide
                        ? view
                          ? item.slice(0, 10).map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)
                          : item
                              .slice(11, item.length)
                              .map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)
                        : item.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />))}
                    {value === 'Trending' &&
                      newArrivalsItems.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}
                    {value === 'Best Sellers' &&
                      bestSellersItems.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}
                    {value === 'English Books' &&
                      englishbooks.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}

                    {value === 'Bal Mukund Books' &&
                      BalMukundBooks.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}
                    {value === 'English Lectures' &&
                      EnglishLectures.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}

                    {value === 'Swamiji Kirtans' &&
                      SwamijiKirtans.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}
                    {value === 'Videos' && Videos.map((item) => <Item item={item} key={`${item.title}-${item.id}`} />)}
                  </Box>
                </Box>
                {/**desktop filter end*/}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    sx={{
                      display: hide && value === 'All' ? '' : 'none',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      background: '#ff6d31',
                    }}
                    onClick={() => setView(!view)}
                    variant={'contained'}>
                    SHOW {view ? 'ALL' : 'LESS'}{' '}
                    {view ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />}
                  </Button>
                </div>
              </div>
            </Box>
        </Fragment>
      )}
    </>
  );
};

export default ProductCategory;
