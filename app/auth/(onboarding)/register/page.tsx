import React from "react";
import RegisterClient from "./RegisterClient";
import ClientOnly from "@/app/components/ClientOnly";

export default function page() {
  return (
    <ClientOnly>
      <RegisterClient />
    </ClientOnly>
  );
}
