"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUsersData } from "@/hooks/useUsersData";
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import { User, LockKeyhole } from "lucide-react";
import { Logo } from "@/components/icons/logo-login";

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/users");
  };

  const submit = async () => {
    try {
      const data = {
        name,
        password,
      };

      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();

        localStorage.setItem("token", responseData.token);

        router.push("/inicio");
      } else {
        setError("Falha na autenticação");
        // console.error("Falha na autenticação");
      }
    } catch (error) {
      console.error("Erro durante a autenticação", error);
    }
  };

  return (
    <div className="flex w-90 h-86 bg-gray-900 p-10 flex-col rounded-lg">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="flex mb-2 bg-gray-150 items-center rounded-lg border mt-4">
        <User className="pl-2" size={25} />
        <PrimaryInputSearchIcon
          type="text"
          value={name}
          updateValue={setName}
          placeholder="Usuário"
        />
      </div>

      <div className="flex bg-gray-150 items-center rounded-lg border">
        <LockKeyhole className="pl-2" size={25} />
        <PrimaryInputSearchIcon
          type="password"
          value={password}
          updateValue={setPassword}
          placeholder="Senha"
        />
      </div>

      {error && (
        <div className="text-red-500 mt-2">
          <span>{error}</span>
        </div>
      )}

      <button
        type="button"
        className="h-10 rounded-lg bg-blue-50 text-gray-50 text-lg font-sans font-semibold mt-3"
        onClick={submit}
      >
        Entrar
      </button>

      <div className="flex mt-2">
        <a
          href="#"
          style={{ fontSize: '12px', color: '#0077cc', cursor: 'pointer' }}
          // onClick={requestNewPasswod}
        >
          Solicitar nova senha
        </a>
      </div>
    </div>
  );
}