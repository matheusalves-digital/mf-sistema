'use client'
import { Nav } from "@/components/nav";
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
    <div className="bg-gray-900 min-h-screen flex">
      <Nav />
      <div className="bg-gray-50 rounded-lg flex-grow mt-6 mr-6 mb-6">
        {data?.map(data => (
          <div key={data.id}>
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
    </div>

  )
}