import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./utils/visibilitySlice";
import usersReducer from "./users/usersSlice";
import jobsReducer from "./jobs/jobsSlice";
import { usersApi } from "./users/usersApi";
import { jobsApi } from "./jobs/jobsApi";
import { experiencesApi } from "./experiences/experiences";

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    users: usersReducer,
    jobs: jobsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [experiencesApi.reducerPath]: experiencesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(jobsApi.middleware)
      .concat(experiencesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
