import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "./dropdownSlice";
import filterReducer from "./filterSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropDownReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
