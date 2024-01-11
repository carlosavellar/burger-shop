import { createSlice } from "@reduxjs/toolkit";

type IItemBasket = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
export interface IBasket {
  id: string;
  items: IItemBasket[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: IBasket = {
  id: " ",
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const loadAllFoods = (state: IBasket) => state;

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  basketSlice.actions;

export default basketSlice.reducer;
