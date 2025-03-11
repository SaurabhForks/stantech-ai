import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL_USERS } from "../utils/const";

/**
 * Creates an asynchronous thunk action for fetching user data from an API.
 *
 * This thunk uses `createAsyncThunk` from Redux Toolkit to handle the asynchronous
 * data fetching process. It encapsulates the logic for making the API request,
 * handling potential errors, and returning the data.
 *
 * The thunk action can be dispatched like a regular action and will automatically
 * update the Redux store's loading state (pending, fulfilled, rejected) based on
 * the status of the API request.
 *
 * @function fetchData
 * @async
 * @throws {Error} Throws an error if the network response is not ok.
 * @returns {Promise<object[]>} A promise that resolves with an array of user objects.
 */
export const fetchData = createAsyncThunk(
  "data/fetchData", // Action type prefix. Used to generate action types like 'data/fetchData/pending', 'data/fetchData/fulfilled', etc.
  async () => {
    // Make the API request to the specified URL.
    const response = await fetch(API_URL_USERS);

    // Check if the API request was successful.
    if (!response.ok) {
      // If the response is not ok (e.g., 404, 500), throw an error.
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response body.
    const data = await response.json();

    // Return the fetched data. This data will be available in the `fulfilled` action.
    return data;
  },
);
