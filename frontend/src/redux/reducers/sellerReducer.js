import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const sellerReducer = createReducer(initialState, {
  LoadSellerRequest: (state) => {
    state.isLoading = true;
  },
  LoadSellerSuccess: (state, action) => {
    state.isLoading = false;
    state.isSeller = true;
    state.seller = action.payload;
  },
  LoadSellerFail: (state, action) => {
    state.isLoading = false;
    state.isSeller = false;
    state.error = action.payload;
  },

  clearError: (state) => {
    state.error = null;
  },
});
