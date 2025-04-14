import { twMerge } from "tailwind-merge";

const Input = (
  {
    name = "",
    type = "",
    value = "",
    onChange = () => {},
    placeholder,
    disabled = false,
    required = false,
    readonly = false,
    label = "",
    ...rest
  },
  ref
) => {
  const isTextArea = type === "textarea";

  return (
    <div
      className={twMerge(
        "relative h-13 px-4 py-2 border border-white/70",
        isTextArea && "h-24"
      )}
    >
      <div className="absolute -top-3 bg-[#171717] px-1.5">{label}</div>

      <input
        ref={ref}
        name={name}
        type={type || "text"}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readonly}
        className="outline-none w-full h-full"
        {...rest}
      />
    </div>
  );
};

export default Input;
