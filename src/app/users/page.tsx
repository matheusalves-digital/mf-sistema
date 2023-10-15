'use client'
import { useUsersResponse } from "@/hooks/useUserQuery"
import { useData } from "@/interfaces/use-data";
import axios from "axios";
import { useEffect, useState } from "react";
  

const API_URL = "https://localhost:7065"

export default function UsersResponse() {
//const { data, isError } = useUsersResponse();
  const [ data, setData ] = useState<useData[]>([])



  const fetchData = async () => {
    const response = await axios.get(API_URL + "/api/User")
    setData(response?.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="p-10">
        {data?.map(data => (
          <div className="flex flex-col w-60 rounded-lg border p-5" key={data.id}>
            <h1>{data.name}</h1>
            <p>{data.senha}</p>
          </div>
        ))}
    </div>

  )
}