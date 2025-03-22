interface InputFieldProps {
    name: string;
    value: string;
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
            className="w-full p-2 border rounded mb-4 bg-gray-700 text-white placeholder-gray-400"
            placeholder={placeholder}
        />
    );
}
