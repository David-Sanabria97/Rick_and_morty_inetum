"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import { loadRecent } from "@/utils/recentStorage";
import { setRecent } from "@/store/recentSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const recent = loadRecent();
    store.dispatch(setRecent(recent));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
