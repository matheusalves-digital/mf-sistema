"use client"
import Image from "next/image";
import logo from "../../assets/logo.png";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import { User, LockKeyhole } from "lucide-react";
import { useUsersData } from "@/hooks/useUsersData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/icons/logo-login";

const validationScrema = z.object({
  name: z
    .string().min(5, "tem que ter 5 caracteres para continuar"),
  senha: z
    .string().min(8, "O Campo tem que conter no minimo 8 caracteres")
        
})
.transform((field) => ({
  name: field.name,
  senha: field.senha
}))


type FormProps = z.infer<typeof validationScrema>
type UserFormData = {
  name: string,
  senha: number
}



export function Login() {
  const [name, setName] = useState<string>()
  const [senha, setSenha] = useState<number>()
  const { mutate, isSuccess } = useUsersData()
  const router = useRouter()
  
  const handleNavigate = () => {
    router.push('/users')
  }

  const submit = () => {
    const data = {
      name,
      senha,
    }
    mutate(data)
    router.push('/users')
  }


  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(validationScrema),
  })

  return (
    <div className="flex w-80 h-96 bg-gray-900 p-10 flex-col rounded-lg">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="flex mb-2 bg-gray-150 items-center rounded-lg border mt-4">
        <User className="pl-2" size={25}/>
        <PrimaryInputSearchIcon
          type="text"
          value={name}
          updateValue={setName}
          placeholder="Usuário"
          {...register('name')}
        />
      </div>
      {errors.name && <span className="mb-2 text-sm text-blue-50">{errors?.name?.message}</span>}

      <div className="flex bg-gray-150 items-center rounded-lg border">
        <LockKeyhole className="pl-2" size={25}/>
        <PrimaryInputSearchIcon
          type="password"
          value={senha}
          updateValue={setSenha}
          placeholder="Senha"
          {...register('senha') }
        />
      </div>
      <span className="text-sm text-blue-50 mb-2">{errors?.senha?.message}</span>

      <button type="submit" className="h-10 rounded-lg bg-blue-50 text-gray-50 text-lg font-sans font-semibold" onClick={submit}>
        Entrar
      </button>
    </div> 
  )

}