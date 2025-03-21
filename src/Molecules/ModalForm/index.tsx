import { ReactNode } from "react";

interface ModalFormProps {
    title: string;
    error: string;
    loading: boolean;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    children: ReactNode;
}

export function ModalForm({ title, error, loading, onSubmit, onClose, children }: ModalFormProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={onSubmit}>
                    {children}
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled={loading}>
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
