import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import IBurgerSection from "@/interfaces/IBurger";
import IDrinksSection from "@/interfaces/IDrink";
import IDessertsSection from "@/interfaces/IDessert";

export interface IMenuItems {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Array<IBurgerSection | IDessertsSection | IDrinksSection>;
  loading: boolean;
  error: string | null;
}

export const initialState: IMenuItems = {
  id: 0,
  name: "",
  type: "",
  collapse: 0,
  sections: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.sections = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const loadAllFoods = (state: IMenuItems) => state;

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  menuSlice.actions;

export default menuSlice.reducer;
