const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
import { AppDispatch } from "@/store";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./../store/slices/menuSlice";

import fetch from "cross-fetch";

export const fetchData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://burguer-shop-main-08acd95.d2.zuplo.dev/foods",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://portal.zuplo.com",
        },
      }
    );
    if (response.status === 429) {
      console.log(response.status);
      return false;
    }
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error: any) {
    dispatch(fetchDataFailure(error.message));
  }
};
