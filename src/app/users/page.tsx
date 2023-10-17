'use client'
import LayoutComponent from "@/components/layout-component";
import { Nav } from "@/components/nav";
import { useUsersResponse } from "@/hooks/useUserQuery"
import { useData } from "@/interfaces/use-data";
import axios from "axios";
import { useEffect, useState } from "react";
  
const API_URL = "https://localhost:7065";


export default function UsersResponse() {
  const [ data, setData ] = useState<useData[]>([])

  const fetchData = async () => {
    const response = await axios.get(API_URL + "/api/User")
    setData(response?.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <LayoutComponent>
      <>
      {data?.map(data => (
          <div key={data.id}>
            <h1>{data.name}</h1>
          </div>
        ))}
      </>
    </LayoutComponent>
  )
}