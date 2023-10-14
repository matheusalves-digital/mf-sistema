import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  label?: string
}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <div>
      <input className="w-full p-2 bg-transparent outline-none" {...props}/>      
    </div>
  )

}