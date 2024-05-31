import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UpdateType = {
  name: string;
  value: string;
};

export type ExperienceType = {
  id: number;
  title: string;
  company: string;
  interval: string;
};

type ExperienceState = {
  [key: string]: string | boolean | ExperienceType;
  isModifying: boolean;
  isSelected: boolean;
  value: ExperienceType;
};

const initialState: ExperienceState = {
  isModifying: false,
  isSelected: false,
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
    toggleModifying: (state) => {
      state.isModifying = !state.isModifying;
    },
    toggleSelected: (state) => {
      state.isSelected = !state.isSelected;
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
  },
});

export const { toggleModifying, setValue, toggleSelected, updateValue } =
  experiencesSlice.actions;

export default experiencesSlice.reducer;
