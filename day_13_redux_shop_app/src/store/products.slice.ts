import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productCartDto } from '../types';

const initialState: { products: productCartDto[] } = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<productCartDto>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
      });
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    resetCart: (state) => {
      state.products = [];
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = productSlice.actions;
export default productSlice.reducer;
