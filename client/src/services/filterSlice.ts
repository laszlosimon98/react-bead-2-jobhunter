import { createSlice } from "@reduxjs/toolkit";

type FilterState = {
  isFilterVisible: boolean;
};

const initialState: FilterState = {
  isFilterVisible: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterToggle: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },
  },
});

export const { filterToggle } = filterSlice.actions;

export default filterSlice.reducer;
