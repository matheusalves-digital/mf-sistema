'use client'
import { Nav } from "@/components/nav";
  

type PropsLayout = {
  children: React.ReactNode
}

export default function LayoutComponent({children}: PropsLayout) {
  return (
    <div className="bg-gray-900 min-h-screen flex">
      <Nav />
      <div className="bg-gray-50 rounded-lg flex-grow mt-6 mr-6 mb-6">
        {children}
      </div>
    </div>

  )
}