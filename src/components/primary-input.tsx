import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  value?: string | number,
  updateValue(value: any): void
  placeholder: string
}

export function PrimaryInputSearchIcon({type, value, updateValue, placeholder}: InputProps) {
  return (
    <div>
      <input 
        type={type}
        className="w-full p-2 outline-none placeholder-gray-100 font-sans font-semibold rounded-lg"
        value={value}
        placeholder={placeholder}
        onChange={event => updateValue(event.target.value)}
      />      
    </div>
  )

}