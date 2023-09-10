import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, {
  // Create product
  EventCreateRequest: (state) => {
    state.isLoading = true;
  },
  EventCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  EventCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // Get product of single shop
  GetAllEventsShopRequest: (state) => {
    state.isLoading = true;
  },
  GetAllEventsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  },
  GetAllEventsShopFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Delete product of a shop
  DeleteEventRequest: (state) => {
    state.isLoading = true;
  },
  DeleteEventSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  DeleteEventFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Clear Error
  clearError: (state) => {
    state.error = null;
  },
});
