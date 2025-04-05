interface InputFieldProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export function InputField({ name, value, onChange, placeholder }: InputFieldProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded mb-4 text-black"
      placeholder={placeholder}
    />
  );
}
