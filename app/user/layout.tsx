import React, { ReactNode } from "react";
import Header from "./components/Header";

interface Dash {
  children: React.ReactNode;
}
export default function DashboardLyout({ children }: Dash) {
  return (
    <div className="bg-red-200 min-h-screen">
      <Header />
      {children}
    </div>
  );
}
