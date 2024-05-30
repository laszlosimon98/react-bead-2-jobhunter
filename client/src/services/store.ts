import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./utils/visibilitySlice";
import authReducer from "./auth/authSlice";
import jobsReducer from "./jobs/jobsSlice";
import { usersApi } from "./users/usersApi";
import { jobsApi } from "./jobs/jobsApi";

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    auth: authReducer,
    jobs: jobsReducer,
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
