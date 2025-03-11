import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL_USERS } from "../utils/const";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch(API_URL_USERS);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});
