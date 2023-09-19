// Import necessary components and styles
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { shades } from '../theme';
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from '../state';
import { CART } from '../utils/constants';

// Create a styled component for a flex container
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  // Define variables and hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.variants[0].price;
  }, 0);

  return (
    <Box
      display={isCartOpen ? 'block' : 'none'}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={99}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto">
      <Box className="cart-page" position="fixed" right="0" bottom="0" height="100%" backgroundColor="white">
        <Box overflow="auto" height="100%" className="full-cart-page">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">
              {CART.SHOPPING_BAG} ({cart.length})
            </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.id}`}>
                <FlexBox p="15px 0">
                  <Box className="flex-image" flex="1 1 40%">
                    <img alt={item?.name} width="123px" height="164px" src={item.image?.src} />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">{item.title}</Typography>
                      <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <FlexBox m="15px 0">
                      <Box display="flex" alignItems="center" border={`1.5px solid ${shades.neutral[500]}`}>
                        <IconButton onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton onClick={() => dispatch(increaseCount({ id: item.id }))}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">${item.variants[0].price}</Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">{CART.SUBTOTAL}</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </FlexBox>
            <Button
              disabled={cart.length === 0}
              sx={{
                backgroundColor: shades.primary[400],
                color: 'white',
                borderRadius: 0,
                minWidth: '100%',
                padding: '20px 40px',
                m: '20px 0',
                display: cart.length === 0 ? 'none' : '',
                '&:hover': {
                  backgroundColor: '#ff6d31',
                },
              }}
              onClick={() => {
                navigate('/checkout');
                dispatch(setIsCartOpen({}));
                window.scrollTo(0, 0);
              }}>
              {CART.CHECKOUT}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
