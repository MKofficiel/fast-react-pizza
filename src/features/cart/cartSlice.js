import { createSelector, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  //   cart: [],

  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      // action.payload is pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// export { getTotalCartQuantity, getTotalCartPrice };

// Reselect selectors for memoization
const selectCart = (state) => state.cart.cart;

const selectTotalCartQuantity = createSelector([selectCart], (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0)
);

const selectTotalCartPrice = createSelector([selectCart], (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0)
);



export {
  selectTotalCartQuantity as getTotalCartQuantity,
  selectTotalCartPrice as getTotalCartPrice,
  selectCart as getCart,
};
