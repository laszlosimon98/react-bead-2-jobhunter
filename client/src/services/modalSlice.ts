import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isModalVisible: boolean;
};

const initialState: ModalState = {
  isModalVisible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOn: (state) => {
      state.isModalVisible = true;
    },
    modalOff: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const { modalOn, modalOff } = modalSlice.actions;

export default modalSlice.reducer;
