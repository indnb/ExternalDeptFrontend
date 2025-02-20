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
            className={`px-[6px] py-[6px] lg:px-[7] lg:py-[7] rounded-md border-2  ${className}`}
        >
            {title}
        </button>
    );
};

export default SwitchLanguageButton;
