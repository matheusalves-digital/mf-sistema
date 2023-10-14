import { ArrowRight } from "lucide-react";
import { PrimaryInputSearchIcon } from "./primary-input";

interface InputProps {
  Logo?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

 export function Input({Logo} : InputProps) {
  return (
    <div className="flex bg-gray-200 rounded-lg border mb-4">
      <PrimaryInputSearchIcon />
    </div>
  )
 }