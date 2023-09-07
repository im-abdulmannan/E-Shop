import { configureStore } from "@reduxjs/toolkit";
import { sellerReducer } from "./reducers/sellerReducer";
import { userReducer } from "./reducers/userReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export default Store;
