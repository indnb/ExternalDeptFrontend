import { useEditCaptainMutation } from "@/api/CaptainApi/useCaptainMutation"
import { useGetCaptainApiQuery } from "@/api/CaptainApi/useCaptainQuery"
import { ICaptain } from "@/Molecules/CaptainRow"


export const useGetCaptain = () => {
  const { data, error, isLoading } = useGetCaptainApiQuery()
  return { data, error, isLoading }
}



export const useChangeCaptain = () => {
  const editCaptain = useEditCaptainMutation()
  const changeCaptain = (data: ICaptain) => {
    const body = {
      captain_id: Number(data.captain_id),
      team_id: Number(data.team_id)
    }
    return editCaptain.mutateAsync(body)

  }
  return { changeCaptain }
}

