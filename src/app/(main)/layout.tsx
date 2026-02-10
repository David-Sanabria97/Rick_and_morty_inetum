"use client";

import Header from "@/components/organisms/Header/Header";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <Header />
        {children}
      </ReactQueryProvider>
    </ReduxProvider>
  );
}
