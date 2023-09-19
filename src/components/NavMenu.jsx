import { useDispatch, useSelector } from 'react-redux';
import Jklog from '../assets/logo/jklogo.png';

import { Badge, Box, IconButton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import '../styles/style.css';
import { ShoppingBagOutlined, MenuOutlined } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
import { setIsCartOpen, setIsNavOpen, setIsFilterOpen } from '../state';
import { useNavigate } from 'react-router-dom';
import { encode as btoa } from 'base-64';
import { setItems, setValue, setPriceFilter, setSortOrder, setItemsCategories } from '../state';
import React, { useEffect, useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Navbar.css';
import '../App.css';
import styled from '@emotion/styled';
import 'react-dropdown/style.css';
import { fetchDataFromApi } from '../utils/api';
import _ from 'lodash';
import '../styles/Item2.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMenu({ navFromTop }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);
  const isFilterOpen = useSelector((state) => state.cart.isFilterOpen);
  const cart = useSelector((state) => state.cart.cart);
  const itemsCategories = useSelector((state) => state.cart.itemsCategories);

  const items = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.cart.value);
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const [item, setItem] = useState([]);
  const [search, setSearchField] = useState('');
  const [categoryList, setCategoryList] = useState(itemsCategories);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [asc, setAsc] = useState([]);
  const [dsc, setDsc] = useState([]);
  const [name, setName] = useState('All');
  const [val, setVal] = useState('');
  const [categories, setCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const getCategories = () => {
    fetchDataFromApi('/api/categories').then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  const options = ['one', 'two', 'three'];
  const defaultOption = options[0];

  async function getItems() {
    try {
      var headers = new Headers();
      headers.append(
        'Authorization',
        'Basic ' + btoa('ce9a3ad16708f3eb4795659e809971c4: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'),
      );

      const result = await fetch('https://hmstdqv5i7.execute-api.us-east-1.amazonaws.com/jkshopstage/products', {
        headers: headers,
      });

      const resp = await result.json();
      if (resp) {
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
    if (!item?.length > 0) {
      getItems();
    }
    getCategories();
  }, []);

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
    setItem(filtered);
  };

  useMemo(() => {
    const filtered = items.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    setItem(filtered);
  }, [items, search]);

  useMemo(() => {
    const filtered = itemsCategories.filter((cat) => cat.toLowerCase().includes(search.toLowerCase()));
    setCategoryList(filtered);
  }, [items, search]);

  const handleSearchField = (e) => {
    setSearchField(e.target.value);
    setHide(false);
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

  const englishbooks = items.filter((item) => item.tags === 'English Books');
  const SwamijiKirtans = items.filter((item) => item.tags === 'Swamiji Kirtans');
  const BalMukundBooks = items.filter((item) => item.tags === 'BalMukund Books');
  const EnglishLectures = items.filter((item) => item.tags === 'English Lectures-Swamiji (Audio)');
  const Videos = items.filter((item) => item.tags === 'Videos');

  const change = () => {
    dispatch(setValue('All'));
  };

  const handleCategoriesChange = (value) => {
    if (value in fruitArrays) {
      setItem(fruitArrays[value][0]);
      setHide(false);
    }
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

  useEffect(() => {
    console.log('categoryList', categoryList);
  }, [categoryList]);

  const SearchClass = show ? 'searchActive' : '';

  const handleNavMenuClick = (cat) => {
    navigate(`/category/${cat}`);
  };
  console.log(show);
  return (
    <>
      <Navbar expand="lg" className="navbox" style={{ top: navFromTop ? 0 : '' }}>
        <div className="navbars container">
          <Navbar.Brand
            onClick={() => {
              navigate(`/`);
            }}>
            {' '}
            <img src={Jklog} alt="not found" onClick={() => change()} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate(`/`);
                }}
                className="nav-item">
                HOME
              </Nav.Link>
              <NavDropdown title="KIRTANS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    handleNavMenuClick('Swamiji%20Kirtans');
                  }}>
                  Swamiji Kirtans
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BOOKS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    handleNavMenuClick('English%20Books');
                  }}>
                  English Books
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    handleNavMenuClick('BalMukund%20Books');
                  }}>
                  BalMukund Books
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="AUDIOS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    handleNavMenuClick('English%20Lectures-Swamiji%20(Audio)');
                  }}>
                  English Lectures
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="VIDEOS" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    handleNavMenuClick('English%20Lectures-Swamiji%20(Video)');
                  }}>
                  Videos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Box
            //columnGap="20px",
            display="flex"
            justifyContent="space-between"
            columnGap="0px"
            zIndex="2">
            <div className={`Search ${SearchClass}`}>
              <input placeholder="Search for Products..." type="text" value={search} onChange={handleSearchField} />
              {search && (
                <div className="searchlist">
                  {categoryList?.map((cat) => (
                    <div onClick={() => navigate(`/category/${cat}`)} className="lst">
                      Category/{cat}
                    </div>
                  ))}
                  {item.map((item) => (
                    <div onClick={() => navigate(`/item/${item.id}`)} className="lst">
                      {item.title}
                    </div>
                  ))}
                </div>
              )}

              <IconButton>
                <SearchOutlined fontSize="medium" sx={{ color: ' #ff6d31;' }} />
              </IconButton>
            </div>

            <IconButton className="Searchmb">
              <SearchOutlined fontSize="medium" sx={{ color: '#fff' }} onClick={() => setShow(!show)} />
            </IconButton>

            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                '& .MuiBadge-badge': {
                  right: 9,
                  top: 5,
                  padding: '0 4px',
                  height: '14px',
                  minWidth: '13px',
                },
              }}>
              <IconButton onClick={() => dispatch(setIsCartOpen({}))} sx={{ color: '#FFFFFF' }}>
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
            <IconButton
              aria-controls="basic-navbar-nav"
              onClick={() => dispatch(setIsNavOpen({}))}
              sx={{ color: '#FFFFFF' }}
              className="menub">
              <MenuOutlined />
            </IconButton>
          </Box>
        </div>
      </Navbar>
    </>
  );
}

export default NavMenu;
