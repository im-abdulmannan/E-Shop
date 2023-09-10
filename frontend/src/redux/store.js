import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/eventReducer";
import { productReducer } from "./reducers/productReducer";
import { sellerReducer } from "./reducers/sellerReducer";
import { userReducer } from "./reducers/userReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
    event: eventReducer,
  },
});

export default Store;
