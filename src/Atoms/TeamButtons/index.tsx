interface ButtonProps {
    onClick?: () => void;
    isLoading?: boolean;
}

export function EditButton({ onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
            ✏️ Edit
        </button>
    );
}

export function DeleteButton({ onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            🗑️ Delete
        </button>
    );
}

export function SaveButton({ isLoading }: ButtonProps) {
    return (
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
        </button>
    );
}

export function CancelButton({ onClick }: ButtonProps) {
    return (
        <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
            Cancel
        </button>
    );
}
