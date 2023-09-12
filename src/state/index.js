import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isCartOpen: false,
  isFilterOpen:false,
  quickDisplay:false,
  value: "All",
  emailAddress: "",
  cart: [],
  items: [],
  reviewd: [],
  priceFilter: [3, 150],
  sortOrder: "",
  address:{},
  item:{},
  price:1,
  code:false,
  success:true,
  directCoupon:false,
  couponName:"",
  itemsCategories: []
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setReviewed: (state, action) => {
      state.reviewd = [action.payload];
    },
    // rateProduct: (state, action) => {
    //   const { itemed } = action.payload;
    //   const product = itemed.items.filter(
    //     (item) => item.id === itemed.productId
    //   );
    //   state.reviewd = [...state.reviewd, product];
    //   console.log(state.reviewd);

    //   // state.items = items.filter((item) => item.id === productId);
    //   // console.log(product);
    //   // if (product) {
    //   //   product.title = rating;
    //   // }
    // },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
      state.price =  state.cart
          .map((item, sumi = 0) => {
            return (sumi = +item.variants[0].price * item.count);
          })
          .reduce(function (acc, val) {
            return acc + val;
          }, 0)
  },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
    setItem: (state,action)=> {
      state.item = action.payload;
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCode: (state) =>{
        state.code = !state.code;
    },
    setDirectCoupon: (state) => {
          state.directCoupon = !state.directCoupon
    },
    setSuccess: (state)=>{
        state.success=!state.success
    },
    setIsNavOpen: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    setIsFilterOpen: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    setDisplay :(state) =>{
      state.quickDisplay = !state.quickDisplay;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPrice :(state,action)=>{
        state.price = action.payload
    },
    setCouponName: (state, action) =>{
      state.couponName = action.payload
    },
    setItemsCategories : (state, action) => {
      state.itemsCategories = action.payload;
    }
  },
});


export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setIsNavOpen,
  setReviewed,
  setValue,
  setEmailAddress,
  setPriceFilter,
  setSortOrder,
  setIsFilterOpen,
  setDisplay,
  setAddress,
  setItem,
  setPrice,
  setCode,
  setSuccess,
  setDirectCoupon,
  setCouponName,
  setItemsCategories
} = cartSlice.actions;


export default cartSlice.reducer;