import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { eventReducer } from "./reducers/eventReducer";
import { productReducer } from "./reducers/productReducer";
import { sellerReducer } from "./reducers/sellerReducer";
import { userReducer } from "./reducers/userReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    product: productReducer,
    event: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
