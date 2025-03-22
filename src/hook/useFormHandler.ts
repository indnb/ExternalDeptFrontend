import { useState, useEffect } from "react";

interface UseFormHandlerProps<T> {
    initialData: T;
    fetchData?: () => Promise<T>;
    submitData: (data: T) => Promise<void>;
    onSave: () => void;
    onClose: () => void;
}

export function useFormHandler<T>({ initialData, fetchData, submitData, onSave, onClose }: UseFormHandlerProps<T>) {
    const [formData, setFormData] = useState<T>(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (fetchData) {
            setLoading(true);
            fetchData()
                .then((data) => setFormData(data))
                .catch(() => setError("Error loading data."))
                .finally(() => setLoading(false));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await submitData(formData);
            onSave();
            onClose();
        } catch {
            setError("Error saving data.");
        } finally {
            setLoading(false);
        }
    };

    return { formData, loading, error, handleChange, handleSubmit };
}
