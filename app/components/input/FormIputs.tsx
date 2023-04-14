"use Client";

import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div
      className="
				w-full 
				relative
			"
    >
      {formatPrice && (
        <span
          className="
					text-neutral-700 
					 absolute 
					 top-5 
					 left-2
				"
        >
          &#8358;
        </span>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
					peer
					w-full
					p-2
					pt-6
					font-light 
					bg-white 
					border-2
					rounded-md
					outline-none
					transition
					disabled:opacity-70
					disabled:cursor-not-allowed
					${formatPrice ? "pl-9" : "pl-4"}
					${errors[id] ? "border-rose-500" : "border-neutral-300"}
					${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
				`}
      />
      <label
        className={`
					absolute 
					text-md
					duration-150 
					transform 
					-translate-y-0 
					top-1 
					z-10 
					origin-[0] 
					${formatPrice ? "left-9" : "left-4"}
					peer-placeholder-shown:scale-100 
					peer-placeholder-shown:translate-y-0 
					peer-focus:scale-75
					peer-focus:-translate-y-0
					${errors[id] ? "text-rose-500" : "text-zinc-400"}
             	`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
