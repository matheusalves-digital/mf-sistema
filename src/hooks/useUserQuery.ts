import { useResponse } from "@/interfaces/use-data";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://localhost:7065"

const fetchData = (): AxiosPromise<useResponse> => {
  const response = axios.get<useResponse>(API_URL + "/api/User");
  return response;
}

export function useUsersResponse() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['user-data']
  })

  return {
    ...query,
    data: query.data?.data
  }
}