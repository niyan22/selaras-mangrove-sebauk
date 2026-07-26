"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Lightbox, type LightboxPhoto } from "./Lightbox";

type OpenLightbox = (photos: LightboxPhoto[], startIndex: number) => void;

const LightboxContext = createContext<OpenLightbox | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ photos: LightboxPhoto[]; index: number } | null>(null);

  const open: OpenLightbox = (photos, startIndex) => setState({ photos, index: startIndex });
  const close = () => setState(null);
  const navigate = (index: number) => setState((s) => (s ? { ...s, index } : s));

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <Lightbox photos={state?.photos ?? []} index={state ? state.index : null} onClose={close} onNavigate={navigate} />
    </LightboxContext.Provider>
  );
}
