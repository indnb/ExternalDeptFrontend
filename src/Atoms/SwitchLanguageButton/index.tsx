"use client";

type ButtonProps = {
    title: string;
    onClick: () => void;
    className?: string;
};

export const SwitchLanguageButton: React.FC<ButtonProps> = ({title, onClick, className,}) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md border-2 ${className}`}
        >
            {title}
        </button>
    );
};

export default SwitchLanguageButton;
