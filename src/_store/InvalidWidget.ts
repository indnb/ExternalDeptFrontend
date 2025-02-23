import { create } from "zustand";

export interface IInvalidWidgetStore {
  fontSize: boolean;
  fontFamily: boolean;
  image: string;
  contrast: boolean;
  setFontSize: () => void;
  setFontFamily: () => void;
  setImage: (imageUrl: string) => void;
  setContrast: () => void;
}

export const useInvalidWidgetStore = create<IInvalidWidgetStore>((set) => ({
  fontSize: false,
  fontFamily: false,
  image: "",
  contrast: false,

  setFontSize: () => set((state) => ({ fontSize: !state.fontSize })),
  setFontFamily: () => set((state) => ({ fontFamily: !state.fontFamily })),
  setImage: (imageUrl) => set(() => ({ image: imageUrl })),
  setContrast: () => set((state) => ({ contrast: !state.contrast })),
}));
