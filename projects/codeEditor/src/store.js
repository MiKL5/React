import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";
import preview from "./features/preview";

export const store = configureStore({
  reducer: { // permet de donné un nouveau state à ces reducers
    tabs,
    preview
  }
})