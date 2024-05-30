import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./utils/visibilitySlice";
import formReducer from "./utils/form/formSlice";
import { usersApi } from "./users/usersApi";
import { jobsApi } from "./jobs/jobsApi";

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    form: formReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(jobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
