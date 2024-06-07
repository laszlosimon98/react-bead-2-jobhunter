import { createSlice } from "@reduxjs/toolkit";

type VisibilityState = {
  isJobModalOpen: boolean;
  isExperienceModalOpen: boolean;
  isApplicantsModalOpen: boolean;
  isFilterVisible: boolean;
  isDropdownVisible: boolean;
};

const initialState: VisibilityState = {
  isJobModalOpen: false,
  isExperienceModalOpen: false,
  isApplicantsModalOpen: false,
  isFilterVisible: false,
  isDropdownVisible: false,
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    jobModalOn: (state) => {
      state.isJobModalOpen = true;
    },
    jobModalOff: (state) => {
      state.isJobModalOpen = false;
    },
    experienceModalOn: (state) => {
      state.isExperienceModalOpen = true;
    },
    experienceModalOff: (state) => {
      state.isExperienceModalOpen = false;
    },
    applicantsModalOn: (state) => {
      state.isApplicantsModalOpen = true;
    },
    applicantsModalOff: (state) => {
      state.isApplicantsModalOpen = false;
    },
    dropDownToggle: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
    filterToggle: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },
    filterClose: (state) => {
      state.isFilterVisible = false;
    },
  },
});

export const {
  jobModalOn,
  jobModalOff,
  experienceModalOn,
  experienceModalOff,
  applicantsModalOn,
  applicantsModalOff,
  dropDownToggle,
  filterToggle,
  filterClose,
} = visibilitySlice.actions;

export default visibilitySlice.reducer;
