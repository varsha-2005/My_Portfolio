import {motion} from "framer-motion";
import { itemVariant } from "@/lib/frammer/Frammer";
export const MotionInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
}: {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <motion.input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="bg-eerie-black-2 text-white-2 text-xs sm:text-sm font-normal p-3 sm:p-4 border border-jet rounded-lg sm:rounded-xl outline-none focus:border-orange-yellow-crayola w-full"
    placeholder={placeholder}
    required
    data-form-input
    variants={itemVariant}
  />
);
