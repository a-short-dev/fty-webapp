import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import Header from "./components/Header";

interface Dash {
  children: React.ReactNode;
}
export default async function DashboardLyout({ children }: Dash) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
  return (
    <div className="bg-slate-500 min-h-screen">
      <Header firstName={currentUser?.firstName} />
      <div className="relative top-16 px-5 py-10">{children}</div>
    </div>
  );
}
