import { Login } from "./login/page";
import { useSession, signIn, signOut} from "next-auth/react"

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-[url(../assets/smas.svg)] bg-cover min-h-screen">
      <div className="">
        <Login />
      </div>
    </main>
  )
}
