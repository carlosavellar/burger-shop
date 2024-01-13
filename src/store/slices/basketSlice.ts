import { createSlice } from "@reduxjs/toolkit";

type IItemBasket = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
export interface IBasket {
  id: string;
  basketItems: IItemBasket[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: IBasket = {
  id: " ",
  basketItems: [],
  total: 0,
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBasketSuccess: (state, action) => {
      state.loading = false;
      state.basketItems = action.payload;
    },
    addToBasket: (state, action) => {
      state.loading = false;
      state.basketItems.concat(action.payload);
    },
    addTotal: (state, action) => {
      debugger;
      state.loading = false;
      state.total = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const loadAllFoods = (state: IBasket) => state;

export const {
  fetchDataStart,
  fetchBasketSuccess,
  fetchDataFailure,
  addToBasket,
  addTotal,
} = basketSlice.actions;

export default basketSlice.reducer;
