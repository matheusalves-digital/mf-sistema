import { Logo } from "@/components/icons/logo-login";
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import Image from "next/image";
import logo from "../assets/logo.png"
import { Login } from "./login/page";

export default function Home() {
  return (
    <main className="flex justify-center items-center m-60"> 
      <Login />
    </main>
  )
}
