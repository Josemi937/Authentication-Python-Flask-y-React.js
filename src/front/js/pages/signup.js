import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/home.css"; 

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(process.env.BACKEND_URL + "/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                navigate("/login");
            } else {
                const errorData = await response.json();
                console.error("Error en el registro:", errorData.msg || "No se especificó un mensaje de error");
            }
        } catch (error) {
            console.error("Error al conectarse al servidor:", error);
        }
    };

    return (
        <div className="signup-background d-flex justify-content-center align-items-center vh-100">
            <div className="signup-content text-center">
                <h1>Create user</h1>
                {error && <p className="text-danger">{error}</p>} 
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn btn-primary w-100" type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};