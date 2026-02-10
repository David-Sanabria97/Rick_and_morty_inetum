"use client";

import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";

import Header from "@/components/organisms/Header/Header";
import RecentCharacters from "@/components/organisms/RecentCharacters/RecentCharacters";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <Header />

        <RecentCharacters />

        {children}
      </ReactQueryProvider>
    </ReduxProvider>
  );
}
