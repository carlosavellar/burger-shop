import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    menuItems: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
