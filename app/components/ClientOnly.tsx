"use client";

import { useState, useEffect } from "react";

interface Children {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: Children) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <> {children} </>;
};

export default ClientOnly;
