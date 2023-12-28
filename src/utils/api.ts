import { AppDispatch } from "@/store";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./../store/slices/menuSlice";

export const fetchData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await fetch(
      "https://2486713dae314753ae6b0ff127002d12.api.mockbin.io/"
    );
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error: any) {
    dispatch(fetchDataFailure(error.message));
  }
};
