"use client";

import Header from "@/components/organisms/Header/Header";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <Header />
      {children}
    </ReactQueryProvider>
  );
}
