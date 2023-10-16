import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  value?: string | number,
  updateValue(value: any): void
  placeholder: string
}

export function PrimaryInputSearchIcon({label, value, updateValue, placeholder}: InputProps) {
  return (
    <div>
      <input 
        className="w-full p-2 bg-transparent outline-none text-gray-300"
        value={value}
        placeholder={placeholder}
        onChange={event => updateValue(event.target.value)}
      />      
    </div>
  )

}