import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import DashboardClient from "./DashboardClient";

export default function page() {
  return (
    <ClientOnly>
      <DashboardClient />
    </ClientOnly>
  );
}
