import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import DashboardClient from "./DashboardClient";
import EmptyState from "@/app/components/EmptyState";

export default async function page() {
   return (
    <ClientOnly>
      <DashboardClient  />
    </ClientOnly>
  );
}
