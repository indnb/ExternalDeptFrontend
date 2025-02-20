import { create } from "zustand";

export interface IInvalidWidgetStore {
  fontSize: number;
  fontFamily: string;
  image: string;
  contrast: string;
  setFontSize: (size: number) => void;
  setFontFamily: (family: string) => void;
  setImage: (imageUrl: string) => void;
  setContrast: (contrast: string) => void;
}

export const useInvalidWidgetStore = create<IInvalidWidgetStore>((set) => ({
  fontSize: 14,
  fontFamily: "Arial",
  image: "",
  contrast: "normal",

  setFontSize: (size) => set(() => ({ fontSize: size })),
  setFontFamily: (family) => set(() => ({ fontFamily: family })),
  setImage: (imageUrl) => set(() => ({ image: imageUrl })),
  setContrast: (contrast) => set(() => ({ contrast })),
}));
