import { ITeam } from "@/type/ITeam";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ITeamStore {
  teams: ITeam[],
  setTeam: (teams: ITeam[]) => void;
}

const localMiddlewares = (f: StateCreator<ITeamStore>) =>
  devtools(
    persist(f, {
      name: "teams",
      storage: createJSONStorage(() => sessionStorage),
    })
  );

export const useTeamStore = create<ITeamStore>()(
  localMiddlewares((set) => ({
    teams: [],
    setTeam: (teams) => {
      set(() => ({
        teams: teams,
      }));
    },
  }))
);

