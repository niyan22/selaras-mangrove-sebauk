"use client";

import { useEffect } from "react";

export function DisableCopy() {
  useEffect(() => {
    function block(e: ClipboardEvent) {
      e.preventDefault();
    }

    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
    };
  }, []);

  return null;
}
