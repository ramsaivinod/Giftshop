// Import statements for dependencies and components
import '../styles/style.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactJsAlert from 'reactjs-alert';
import { Typography, Button, Box, Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { setPrice, setCode, setSuccess, setDirectCoupon, setCouponName } from '../state';
import NavMenu from '../components/NavMenu';

import truck from '../assets/logo/truck.png';
import premium from '../assets/logo/premium.png';
import offer from '../assets/logo/offer.png';

// Ticket component definition
const Ticket = () => {
  // Redux store state and dispatch
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const price = useSelector((state) => state.cart.price);
  const success = useSelector((state) => state.cart.success);
  const [csuccess, setCSuccess] = useState(success ? false : true);
  const directCoupon = useSelector((state) => state.cart.directCoupon);
  const [add, setAdd] = useState(false);
  const breakPoint = useMediaQuery('(max-width:700px)');
  const [status, setStatus] = useState(false);
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  // Fetch coupon data from an external API on component mount
  useEffect(() => {
    async function applycoupan() {
      var headers = new Headers();
      headers.append(
        'Authorization',
        'Basic ' + btoa('ce9a3ad16708f3eb4795659e809971c4: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'),
      );

      const result = await fetch('https://qc2n483pw9.execute-api.us-east-1.amazonaws.com/QA', {
        headers: headers,
      });

      const itemJson = await result.json();
      const l = JSON.parse(itemJson.body);
      setCoupon(l.price_rules);
    }
    applycoupan();
  }, []);

  // Styles for components
  const style = {
    box: {
      height: 'auto',
      textAlign: 'center',
      width: '75%',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid white',
    },
    box2: {
      height: 'auto',
      textAlign: 'center',
      width: breakPoint ? '100%' : '75%',
      padding: breakPoint ? '15px 10%' : '5%',
      display: breakPoint ? 'block' : 'block',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  // Function to handle applying a discount coupon
  const handleDiscount = (code, i) => {
    if (cart.length === 0) {
      setStatus(true);
      setType('error');
      setTitle('Please Add Item(s) To Cart');
    } else {
      const totalPrice = parseFloat(price - -coupon[i].value).toFixed(1);
      setStatus(true);
      setType('success');
      setTitle('Discount Applied');
      dispatch(setPrice(totalPrice));
      dispatch(setCode(!code));
      dispatch(setSuccess(!success));
      setCSuccess(!csuccess);
      dispatch(setDirectCoupon(!directCoupon));
      dispatch(setCouponName(code));
      setAdd(!add);
    }
  };

  // Render the Ticket component
  return (
    <>
      <div style={{ paddingBottom: '90px' }}>
        <NavMenu navFromTop={true} />
      </div>
      <Box className="container">
        {/* ReactJsAlert for displaying status messages */}
        <ReactJsAlert
          status={status} // true or false
          type={type} // success, warning, error, info
          title={title}
          autoCloseIn={8000}
          Close={() => setStatus(false)}
        />
        <Typography variant="h2" fontFamily={'Lora'}>
          Coupons and Deals
        </Typography>
        <Typography variant="h3" sx={{ mt: '30px', mb: '50px', fontFamily: 'Rubik' }}>
          Explore current JKYOG featured coupons, deals, sales, and promotions to discover great savings
        </Typography>
        <Box mt="30px">
          <Button
            onClick={() => navigate(`/`)}
            variant="contained"
            sx={{
              backgroundColor: '#ff6d2f',
              position: 'absolute',
              left: '0',
              ml: breakPoint ? '14px' : '100px',
            }}>
            {' '}
            <ArrowBackIcon />
          </Button>
        </Box>
        <div
          style={{
            display: 'flex',
            alignItems: 'normal',
            justifyContent: 'center',
            height: '0px',
            columnGap: '80px',
          }}></div>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#ff6d2f',
            fontWeight: 'bolder',
          }}
          onClick={() => {
            navigate('/checkout');
          }}>
          Proceed to checkout
        </Button>
        <Box columnGap="100px" display="flex" justifyContent="space-between" zIndex="2">
          <Box
            sx={{
              height: breakPoint ? '7rem' : '15rem',
              width: '100%',
              background: '#515477',
              display: 'inline-flex',
              position: 'relative',
              marginTop: '16px',
              justifyContent: 'center',
            }}>
            {breakPoint ? (
              <Box sx={style.box2}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'whitesmoke',
                      fontSize: breakPoint ? '12px' : '25px',
                    }}>
                    ${-coupon[0]?.value} Off Entire Order
                  </Typography>
                </Box>
                <Box sx={style.box2}>
                  <Typography
                    variant="h1"
                    sx={{
                      mr: '10px',
                      color: 'whitesmoke',
                      fontSize: breakPoint ? '21px' : '48px',
                    }}>
                    {coupon[0]?.title}
                  </Typography>
                  <Box>
                    {success && !csuccess && (
                      <Button
                        variant="h3"
                        onClick={() => {
                          handleDiscount(coupon[0]?.title, 0);
                        }}
                        sx={{
                          color: 'whitesmoke',
                          textDecoration: 'underline',
                          m: breakPoint ? '0px' : '30px',
                          fontSize: breakPoint ? '14px' : '30px',
                        }}>
                        {'Apply Now'}
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box sx={style.box2}>
                <Typography
                  variant="h1"
                  sx={{ mr: '10px', color: 'whitesmoke', fontSize: breakPoint ? '21px' : '48px' }}>
                  {coupon[0]?.title}
                </Typography>
                <Typography variant="h5" sx={{ color: 'whitesmoke', fontSize: breakPoint ? '12px' : '25px' }}>
                  {' '}
                  ${-coupon[0]?.value} Off Entire Order
                </Typography>
                {success && (
                  <Button
                    variant="h3"
                    onClick={() => {
                      handleDiscount(coupon[0]?.title, 0);
                    }}
                    sx={{
                      color: 'whitesmoke',
                      textDecoration: 'underline',
                      m: '30px',
                      fontSize: breakPoint ? '14px' : '30px',
                    }}>
                    {' '}
                    Apply Now
                  </Button>
                )}
              </Box>
            )}
          </Box>
        </Box>

        <Box
          className="offer-box"
          sx={{
            height: 'auto',
            width: '100%',
            background: '#367f8c',
            marginTop: '16px',
            justifyContent: 'center',
          }}>
          <Box sx={style.box}>
            <Typography
              variant="h1"
              sx={{
                mr: '10px',
                color: 'whitesmoke',
                fontSize: breakPoint ? '16px' : '30px',
              }}>
              {' '}
              {coupon[1]?.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: 'whitesmoke',
                fontSize: breakPoint ? '12px' : '20px',
              }}>
              {' '}
              $1 Off Any Item Purchased
            </Typography>
            {success && (
              <Button
                variant="h5"
                onClick={() => {
                  handleDiscount(coupon[1]?.title, 1);
                }}
                sx={{
                  color: 'whitesmoke',
                  textDecoration: 'underline',
                  m: '30px',
                  fontSize: breakPoint ? '13px' : '30px',
                }}>
                {' '}
                Shop Now
              </Button>
            )}
          </Box>

          <Divider
            sx={{
              background: 'whitesmoke',
              width: '1px',
              height: '50%',
              transform: 'translateY(50%)',
            }}
            flexItem
          />
          <Box sx={style.box}>
            <Typography
              variant="h1"
              sx={{
                mr: '10px',
                color: 'whitesmoke',
                fontSize: breakPoint ? '16px' : '30px',
              }}>
              {' '}
              {coupon[3]?.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: 'whitesmoke',
                fontSize: breakPoint ? '12px' : '20px',
              }}>
              {' '}
              {-coupon[2]?.value}% Off Entire Order
            </Typography>
            {success && (
              <Button
                variant="h5"
                onClick={() => {
                  handleDiscount(coupon[2]?.title, 2);
                }}
                sx={{
                  color: 'whitesmoke',
                  textDecoration: 'underline',
                  m: '30px',
                  fontSize: breakPoint ? '13px' : '30px',
                }}>
                {' '}
                Shop Now
              </Button>
            )}
          </Box>
        </Box>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '0 12%' }}>
          <div
            style={{
              width: 'calc(100% / 3)',
              textAlign: 'center',
              padding: '36px 10px',
            }}>
            <img src={truck} alt="" style={{ height: breakPoint ? '75px' : '30%' }} />
            <Typography
              variant="h3"
              fontWeight={'bold'}
              sx={{
                textDecoration: 'underline',
                pt: '20px',
                fontSize: breakPoint ? '12px' : '20px',
              }}>
              {' '}
              Spend $40 Get FREE Shipping
            </Typography>
          </div>
          <div
            style={{
              width: 'calc(100% / 3)',
              textAlign: 'center',
              padding: '36px 10px',
            }}>
            <img src={premium} alt="" style={{ height: breakPoint ? '75px' : '30%' }} />
            <Typography
              variant="h3"
              fontWeight={'bold'}
              sx={{
                textDecoration: 'underline',
                pt: '20px',
                fontSize: breakPoint ? '12px' : '20px',
              }}>
              {' '}
              Lifetime Membership
            </Typography>
          </div>
          <div
            style={{
              width: 'calc(100% / 3)',
              textAlign: 'center',
              padding: '36px 10px',
            }}>
            <img src={offer} alt="" style={{ height: breakPoint ? '75px' : '30%' }} />
            <Typography
              variant="h3"
              fontWeight={'bold'}
              sx={{
                textDecoration: 'underline',
                pt: '20px',
                fontSize: breakPoint ? '12px' : '20px',
              }}>
              {' '}
              Get Exclusive Offers
            </Typography>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Ticket;
