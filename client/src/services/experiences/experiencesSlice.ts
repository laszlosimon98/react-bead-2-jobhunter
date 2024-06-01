import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { UpdateType } from "../../types/updateType";
import type {
  ExperienceState,
  ExperienceType,
} from "../../types/experiencesType";

const initialState: ExperienceState = {
  isModifying: false,
  isModalOpen: false,
  isCreating: false,
  value: {
    id: 0,
    company: "",
    title: "",
    interval: "",
  },
};

const experiencesSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    creatingOn: (state) => {
      state.isCreating = true;
    },
    creatingOff: (state) => {
      state.isCreating = false;
    },
    modifyingOn: (state) => {
      state.isModifying = true;
    },
    modifyingOff: (state) => {
      state.isModifying = false;
    },
    setValue: (state, action: PayloadAction<ExperienceType>) => {
      state.value = { ...action.payload };
    },
    updateValue: (state, action: PayloadAction<UpdateType>) => {
      state.value = {
        ...state.value,
        [action.payload.name]: action.payload.value,
      };
    },
    setFormEmpty: (state) => {
      state.isModalOpen = false;
      state.isCreating = false;
      state.value = { ...initialState.value };
    },
  },
});

export const {
  modifyingOff,
  modifyingOn,
  setValue,
  updateValue,
  openModal,
  closeModal,
  setFormEmpty,
  creatingOff,
  creatingOn,
} = experiencesSlice.actions;

export default experiencesSlice.reducer;
