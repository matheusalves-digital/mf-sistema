import { Logo } from "@/components/icons/logo-login";
import { Input } from "@/components/input-value";
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import Image from "next/image";
import logo from "../assets/logo.png"

export default function Home() {
  return (
    <main className="flex justify-center items-center m-60"> 
      <div className="flex w-80 h-96 bg-gray-900 p-10 flex-col">
        <div className="flex justify-center ">
          <Image src={logo} alt='logo'/>
        </div>
        <Input />
        <Input />
        <button className="bg-slate-500">
          Confirma
        </button>
      </div> 
    </main>
  )
}
