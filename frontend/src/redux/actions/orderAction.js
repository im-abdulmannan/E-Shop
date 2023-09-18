import axios from "axios";
import { server } from "../../server";

// Get all order of a user
export const getUserOrders = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetUserOrdersRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-user-orders/${userId}`
    );
    dispatch({
      type: "GetUserOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetUserOrdersFail",
      payload: error.response.data.message,
    });
  }
};

// Get all orders of a shop
export const getShopOrders = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetShopOrdersRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-seller-orders/${shopId}`
    );
    dispatch({
      type: "GetShopOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetShopOrdersFail",
      payload: error.response.data.message,
    });
  }
};
