'use client'
import LayoutComponent from "@/components/layout-component";
import { useData } from "@/interfaces/use-data";
import axios from "axios";
import { useEffect, useState } from "react";
  
const API_URL = "https://localhost:7065";


export default function Inicio() {
  const [ data, setData ] = useState<useData[]>([]);

  const fetchData = async () => {
    const response = await axios.get(API_URL + "/api/User")
    setData(response?.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <LayoutComponent>
        <p>Inicio</p>
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