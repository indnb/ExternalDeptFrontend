"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ admin_name: username, admin_password: password });
            router.push("/admin");
        } catch (err: any) {
            setError(err.response?.data?.message || "registration error");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={handleLogin} style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <h2>Authorization</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div>
                    <label>Name:</label>
                    <input className="text-black"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input className="text-black"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
                    login
                </button>
            </form>
        </div>
    );
}
