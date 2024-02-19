import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type IItemBasket = {
  id: number;
  name: string;
  quantity: number;
  modifierName: string;
  modifierQta: number;
  price: number;
  updatedPrice: number;
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

const findItemId = (itemState: any, actionItem: PayloadAction<IItemBasket>) => {
  const itemIndex = itemState.findIndex(
    (item: any) => item.id === actionItem.payload.id
  );
  if (itemIndex !== -1) {
    return itemIndex;
  } else {
    return "No such item";
  }
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
      const itemIndex = state.basketItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.basketItems[itemIndex] = action.payload;
      } else {
        state.basketItems.push(action.payload);
      }
      const totalSum = state.basketItems.reduce((acc, item) => {
        if (
          item.updatedPrice !== undefined &&
          typeof item.updatedPrice === "number"
        ) {
          return acc + item.price;
        } else {
          return acc;
        }
      }, 0);
      state.total = totalSum;
      state.id = "11aas";
    },
    updateBaskedProduct: (state, action: PayloadAction<IItemBasket>) => {
      const updatedItem = action.payload;
      const index = state.basketItems.findIndex((loadedItem) => {
        if (!updatedItem) {
          console.log(updatedItem, "Nothing exist");
        } else {
          return loadedItem.id === updatedItem.id;
        }
      });
      if (updatedItem) {
        state.basketItems[index] = updatedItem;
      }
    },
    updateItem: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const { id, count } = action.payload;
      debugger;
      const itemIndex = state.basketItems.findIndex((loadedItem) => {
        return loadedItem.id === id;
      });
      if (itemIndex !== -1) {
        state.basketItems[itemIndex].modifierQta = count;
        console.log(state.basketItems[itemIndex].modifierQta, "----",         state.basketItems[itemIndex].modifierQta = count;
        console.log(state.basketItems[itemIndex].modifierQta, "----");
);
      }
    },
    addTotal: (state, action) => {
      state.loading = false;
      state.total = action.payload?.price;
      state.id = "11aas";
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
  updateBaskedProduct,
  updateItem,
} = basketSlice.actions;

export default basketSlice.reducer;
