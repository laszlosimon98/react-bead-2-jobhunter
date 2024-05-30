import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JobType } from "./jobsApi";

type UpdateType = {
  name: string;
  value: number | string | boolean;
};

type KeyType = {
  [key: string]: string | boolean | number;
};

type FilteredType = {
  isFiltered: boolean;
};

type JobsState = {
  data: {
    search: Partial<JobType>;
    filter: Partial<JobType> & KeyType & FilteredType;
    advertisement: Partial<JobType> & KeyType;
  };
};

const initialState: JobsState = {
  data: {
    search: {
      company: "",
      salaryFrom: 0,
      salaryTo: 2000000,
      type: "full-time",
      city: "Budapest",
      homeOffice: false,
    },
    filter: {
      isFiltered: false,
      company: "",
      salaryFrom: 0,
      salaryTo: 2000000,
      type: "full-time",
      city: "Budapest",
      homeOffice: false,
    },
    advertisement: {
      company: "",
      position: "",
      description: "",
      salaryFrom: 0,
      salaryTo: 0,
      type: "full-time",
      city: "",
      homeOffice: false,
    },
  },
};

const jobsSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormEmpty: (state) => {
      state.data = {
        ...initialState.data,
      };
    },
    setFilter: (state, action: PayloadAction<UpdateType>) => {
      state.data.filter = {
        ...state.data.filter,
        [action.payload.name]: action.payload.value,
      };
    },
    setSearch: (state) => {
      state.data.search = {
        ...state.data.filter,
      };
    },
    setFiltered: (state) => {
      state.data.filter = {
        ...state.data.filter,
        isFiltered: true,
      };
    },
    removeFilter: (state) => {
      state.data.filter = {
        ...state.data.filter,
        isFiltered: false,
      };
    },
    setAdvertisement: (state, action: PayloadAction<UpdateType>) => {
      state.data.advertisement = {
        ...state.data.advertisement,
        [action.payload.name]: action.payload.value,
      };
    },
    setJob: (state, action: PayloadAction<JobType>) => {
      state.data.advertisement = action.payload;
    },
    setEmpty: (state) => {
      state.data.advertisement = { ...initialState.data.advertisement };
    },
  },
});

export const {
  setFormEmpty,
  setFilter,
  setFiltered,
  setSearch,
  removeFilter,
  setAdvertisement,
  setJob,
  setEmpty,
} = jobsSlice.actions;

export default jobsSlice.reducer;
