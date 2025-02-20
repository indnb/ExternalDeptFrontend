import { create } from "zustand";
import React from "react";

export interface IRefStore {
  refRegistrationSection: React.RefObject<HTMLDivElement> | null;
  setRef: (newRef: React.RefObject<HTMLDivElement>) => void;
}

export const useRefStore = create<IRefStore>((set) => ({
  refRegistrationSection: null,
  setRef: (newRef) => {
    set(() => ({
      refRegistrationSection: newRef,
    }));
  },
}));
