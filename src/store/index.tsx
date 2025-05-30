import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    menuItems: menuSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
