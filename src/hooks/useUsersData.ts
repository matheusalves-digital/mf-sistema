import { useData } from "@/interfaces/use-data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080"

const postData = async (data: useData) => {
  return await axios.post(API_URL + "/api/users", data);
}

export function useUsersData() {
  const mutate = useMutation({
    mutationFn: postData,

  })

  return mutate;
}