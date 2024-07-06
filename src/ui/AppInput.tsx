import { FC } from "react";

interface Props {
  type?: "text" | "passsword";
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  inputmode?:
    | "numeric"
    | "email"
    | "text"
    | "decimal"
    | "search"
    | "tel"
    | "url";
  label?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
}

const AppInput: FC<Props> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  inputmode = "text",
  label,
  id,
  maxLength,
  minLength,
}) => {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={id}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputmode}
        className={`input input-bordered w-full ${className}`}
      />
    </div>
  );
};

export default AppInput;
