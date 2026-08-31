"use client";

import { useState } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  return {
    open,
    toggle: () => setOpen((current) => !current),
    close: () => setOpen(false),
  };
}
