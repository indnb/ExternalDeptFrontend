import { useGetCaptainApiQuery } from "@/api/CaptainApi/useCaptainQuery"


export const useGetCaptain = () => {
  const { data, error, isLoading } = useGetCaptainApiQuery()


  return { data, error, isLoading }
}
