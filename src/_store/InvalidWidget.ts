import { create } from "zustand";
import React from "react";

export interface IInvalidWidgetStore {
  fonSize: number;
  fontFamily: string;
  image: string;
  contrast: string;
  setRef: () => void;
}

export const useInvalidWidgetStore = create<IInvalidWidgetStore>((set) => ({
  refRegistrationSection: null,
  setRef: (newRef) => {
    set(() => ({
      refRegistrationSection: newRef,
    }));
  },
}));
