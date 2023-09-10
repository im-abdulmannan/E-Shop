import axios from "axios";
import { server } from "../../server";

// Create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );

    dispatch({
      type: "ProductCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "ProductCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Get all products of shop
export const getAllShopProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-shop-products/${id}`
    );
    dispatch({
      type: "GetAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GetAllProductsShopFail",
      payload: error.response.data.message,
    });
  }
};

// Delete Product of a shop
export const deleteShopProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DeleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteProductFail",
      payload: error.response.data.message,
    });
  }
};
