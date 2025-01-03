import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ILanguageStore {
  language: "ua" | "eng";
  changeLanguage: (newLanguage: "ua" | "eng") => void;
}

const localMiddlewares = (f: StateCreator<ILanguageStore>) =>
  devtools(
    persist(f, {
      name: "language",
      storage: createJSONStorage(() => sessionStorage),
    })
  );

export const useLanguageStore = create<ILanguageStore>()(
  localMiddlewares((set) => ({
    language: "ua",
    changeLanguage: (newLanguage) => {
      set(() => ({
        language: newLanguage,
      }));
     
    },
  }))
);
