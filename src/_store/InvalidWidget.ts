import { create } from "zustand";

export interface IInvalidWidgetStore {
  fontSize: number;
  fontFamily: string;
  image: string;
  contrast: boolean;
  setFontSize: (size: number) => void;
  setFontFamily: (family: string) => void;
  setImage: (imageUrl: string) => void;
  setContrast: () => void;
}

export const useInvalidWidgetStore = create<IInvalidWidgetStore>((set) => ({
  fontSize: 14,
  fontFamily: "Arial",
  image: "",
  contrast: false,

  setFontSize: (size) => set(() => ({ fontSize: size })),
  setFontFamily: (family) => set(() => ({ fontFamily: family })),
  setImage: (imageUrl) => set(() => ({ image: imageUrl })),
  setContrast: () => set((state) => ({ contrast: !state.contrast })),
}));
