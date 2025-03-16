export const TextInputField = ({ value, onChange, placeholder = "", className = "" }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full p-2 border rounded text-black bg-white ${className}`}
        />
    );
};
