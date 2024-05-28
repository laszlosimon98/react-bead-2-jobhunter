import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./utils/visibilitySlice";
import authReducer from "./auth/authSlice";
import formReducer from "./form/formSlice";
import { authApi } from "./auth/authApi";

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    auth: authReducer,
    form: formReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
