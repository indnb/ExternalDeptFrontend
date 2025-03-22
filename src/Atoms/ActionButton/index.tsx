import React from "react";

interface ActionButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
    isLoading?: boolean;
    icon?: string;
}

export function ActionButton({ onClick, text, className, isLoading, icon }: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded ${className}`}
            disabled={isLoading}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {isLoading ? "Loading..." : text}
        </button>
    );
}
