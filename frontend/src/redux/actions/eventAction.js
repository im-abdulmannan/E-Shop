import axios from "axios";
import { server } from "../../server";

// Create event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "EventCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch({
      type: "EventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "EventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Get all events from shop
export const getAllShopEvents = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllEventsShopRequest",
    });

    const { data } = await axios.get(`${server}/event/get-shop-events/${id}`);

    dispatch({
      type: "GetAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GetAllEventsShopFail",
      payload: error.response.data.message,
    });
  }
};

// Delete Event of a shop
export const deleteShopEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DeleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteEventFail",
      payload: error.response.data.message,
    });
  }
};

// Get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllEventsRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({
      type: "GetAllEventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GetAllEventsFail",
      payload: error.response.data.message,
    });
  }
};
