export const PrimaryButton = ({ children, onClick, className = "", disabled = false }) => {
    return (
        <button className={`py-2 px-4 rounded ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
