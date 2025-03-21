import { create } from "zustand";

export interface IInvalidWidgetStore {
  fontSize: boolean;
  fontFamily: boolean;
  image: boolean;
  contrast: boolean;
  setFontSize: () => void;
  setFontFamily: () => void;
  setImage: () => void;
  setContrast: () => void;
}

export const useInvalidWidgetStore = create<IInvalidWidgetStore>((set) => ({
  fontSize: false,
  fontFamily: false,
  image: false,
  contrast: false,

  setFontSize: () => set((state) => ({ fontSize: !state.fontSize })),
  setFontFamily: () => set((state) => ({ fontFamily: !state.fontFamily })),
  setImage: () => set((state) => ({ image: !state.image })),
  setContrast: () => set((state) => ({ contrast: !state.contrast })),
}));
