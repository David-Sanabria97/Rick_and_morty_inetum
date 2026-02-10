import { configureStore } from "@reduxjs/toolkit";
import recentReducer from "./recentSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    recent: recentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
