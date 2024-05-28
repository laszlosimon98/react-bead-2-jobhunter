import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./visibilitySlice";
import authReducer from "./authSlice";
import { authApi } from "./authApi";

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
