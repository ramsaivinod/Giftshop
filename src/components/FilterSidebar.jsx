import React from 'react'
import { useState } from 'react';
import "./filtersidebar.scss";
import "./thank.scss";
import { Box } from '@mui/material';
import PriceFilter from './PriceFilter';

const FilterSidebar = ({ products, onFilter }) => {
    const [filters, setFilters] = useState({
      category: '',
      priceRange: ''
    });
  
    const handleFilterChange = (filterName, value) => {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterName]: value
      }));
    };
  
    const handleApplyFilters = () => {
      const filteredProducts = products.filter(product => {
        let matchesCategory = true;
        let matchesPriceRange = true;
  
        if (filters.category) {
          matchesCategory = product.category === filters.category;
        }
  
        if (filters.priceRange) {
          matchesPriceRange = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
        }
  
        return matchesCategory && matchesPriceRange;
      });
  
      onFilter(filteredProducts);
    };
  
    return (

  <div className="filter-sidebar">
  <h2>Filters</h2>

  <div className="filter-section">
    <h3>Category</h3>
    <ul>
      <li>
        <button onClick={() => handleFilterChange('category', '')}>All</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'electronics')}>Electronics</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'clothing')}>Clothing</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'home')}>Home</button>
      </li>
    </ul>
  </div>

  <div className="filter-section">
    <h3>Price Range</h3>
    <ul>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 0, max: Infinity })}>All</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 0, max: 50 })}>Under $50</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 50, max: 100 })}>$50 - $100</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 100, max: Infinity })}>Over $100</button>
      </li>
    </ul>
  </div>

  <button onClick={handleApplyFilters}>Apply Filters</button>
</div>

    );
  };


//   <Box
//   display={"block"}
//   backgroundColor="rgba(0, 0, 0, 0.4)"
//   position="fixed"
//   zIndex={10}
//   width="100%"
//   height="100%"
//   left="0"
//   top="0"
//   overflow="auto"
// >
//   <Box
//     position="fixed"
//     left="0"
//     bottom="0"
//     width="max(400px, 30%)"
//     height="100%"
//     backgroundColor="white"
//   >
//     {/* <Box padding="30px" overflow="auto" height="100%">

//       <FlexBox mb="15px">
//         <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
//         <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
//           <CloseIcon />
//         </IconButton>
//       </FlexBox>

//       <Box>
//         {cart.map((item) => (
//           <Box key={`${item.id}`}>
//             <FlexBox p="15px 0">
//               <Box flex="1 1 40%">
//                 <img
//                   alt={item?.name}
//                   width="123px"
//                   height="164px"
//                   src={item.image?.src}
//                 />
//               </Box>
//               <Box flex="1 1 60%">
//                 <FlexBox mb="5px">
//                   <Typography fontWeight="bold">{item.title}</Typography>
//                   <IconButton
//                     onClick={() =>
//                       dispatch(removeFromCart({ id: item.id }))
//                     }
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                 </FlexBox>
       
//                 <FlexBox m="15px 0">
//                   <Box
//                     display="flex"
//                     alignItems="center"
//                     border={`1.5px solid ${shades.neutral[500]}`}
//                   >
//                     <IconButton
//                       onClick={() =>
//                         dispatch(decreaseCount({ id: item.id }))
//                       }
//                     >
//                       <RemoveIcon />
//                     </IconButton>
//                     <Typography>{item.count}</Typography>
//                     <IconButton
//                       onClick={() =>
//                         dispatch(increaseCount({ id: item.id }))
//                       }
//                     >
//                       <AddIcon />
//                     </IconButton>
//                   </Box>
//                   <Typography fontWeight="bold">
//                     ${item.variants[0].price}
//                   </Typography>
//                 </FlexBox>
//               </Box>
//             </FlexBox>
//             <Divider />
//           </Box>
//         ))}
//       </Box>

//       <Box m="20px 0">
//         <FlexBox m="20px 0">
//           <Typography fontWeight="bold">SUBTOTAL</Typography>
//           <Typography fontWeight="bold">${totalPrice}</Typography>
//         </FlexBox>
//         <Button
//           disabled={cart.length === 0}
//           sx={{
//             backgroundColor: shades.primary[400],
//             color: "white",
//             borderRadius: 0,
//             minWidth: "100%",
//             padding: "20px 40px",
//             m: "20px 0",
//             display: cart.length === 0 ? "none" : "",
//           }}
//           onClick={() => {
//             navigate("/checkout");
//             dispatch(setIsCartOpen({}));
//           }}
//         >
//           CHECKOUT
//         </Button>
//       </Box>
//     </Box> */}
//   </Box>

  
// </Box>






export default FilterSidebar;
