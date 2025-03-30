import { IUniversity } from "@/type/IUnviresity";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface IUniversityStore {
  university: IUniversity[],
  setUniversity: (university: IUniversity[]) => void;
}

const localMiddlewares = (f: StateCreator<IUniversityStore>) =>
  devtools(
    persist(f, {
      name: "university",
      storage: createJSONStorage(() => sessionStorage),
    })
  );

export const useUniversityStore = create<IUniversityStore>()(
  localMiddlewares((set) => ({
    university: [],
    setUniversity: (university) => {
      set(() => ({
        university: university,
      }));
    },
  }))
);


