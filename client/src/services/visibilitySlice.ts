import { createSlice } from "@reduxjs/toolkit";

type VisibilityState = {
  isModalVisible: boolean;
  isFilterVisible: boolean;
  isDropdownVisible: boolean;
};

const initialState: VisibilityState = {
  isModalVisible: false,
  isFilterVisible: false,
  isDropdownVisible: false,
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    modalOn: (state) => {
      state.isModalVisible = true;
    },
    modalOff: (state) => {
      state.isModalVisible = false;
    },
    dropDownToggle: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
    filterToggle: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },
  },
});

export const { modalOn, modalOff, dropDownToggle, filterToggle } =
  visibilitySlice.actions;

export default visibilitySlice.reducer;
