import { createSlice } from "@reduxjs/toolkit";

type DropDownState = {
  isDropdownVisible: boolean;
};

const initialState: DropDownState = {
  isDropdownVisible: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    dropDownToggle: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
  },
});

export const { dropDownToggle } = dropdownSlice.actions;

export default dropdownSlice.reducer;
