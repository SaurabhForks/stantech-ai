import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

/**
 * Configures the Redux store for the application.
 *
 * The store is the central hub for the application's state. It uses reducers to
 * manage how the state is updated in response to dispatched actions.
 */
const store = configureStore({
  /**
   * Defines the reducers for the store.
   *
   * Each key in the `reducer` object represents a slice of the state.
   * The value associated with each key is the reducer function responsible for
   * managing that specific slice of the state.
   */
  reducer: {
    /**
     * The 'data' slice of the state is managed by the `dataReducer`.
     *
     * This reducer handles actions related to fetching and managing user data.
     * This includes updating the loading state, handling errors, and updating the data.
     *
     * @see dataSlice.js
     */
    data: dataReducer,
  },
});

// Export the configured store to be used throughout the application.
export default store;
