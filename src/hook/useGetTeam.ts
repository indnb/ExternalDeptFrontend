import { useTeamStore } from "@/_store/Team";
import { useUniversityStore } from "@/_store/University";
import { useTeamApiQuery } from "@/api/useGetTeam";
import { useUniversityApiQuery } from "@/api/useGetUniversity";
import { useEffect } from "react";



export const useGetEntity = (type: "team" | "university") => {
  const teamQuery = useTeamApiQuery();
  const universityQuery = useUniversityApiQuery();

  const teamStore = useTeamStore();
  const universityStore = useUniversityStore();

  const query = type === "team" ? teamQuery : universityQuery;
  const setData = type === "team" ? teamStore.setTeam : universityStore.setUniversity;

  useEffect(() => {
    if (query.data) {
      setData(query.data);
    }
  }, [query.data, setData]);

  return query;
};
