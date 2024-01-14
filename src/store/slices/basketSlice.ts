import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IItemBasket = {
  id: string | number;
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
    addToBasket: (state, action: PayloadAction<IItemBasket>) => {
      state.basketItems.push(action.payload);
    },
    addTotal: (state, action) => {
      state.loading = false;
      state.total = action.payload?.price;
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
