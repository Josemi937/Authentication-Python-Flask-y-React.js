import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css"; 

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.BACKEND_URL + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();

                
                localStorage.setItem("token", data.token);

                
                localStorage.setItem("email", email);  

                
                navigate("/private");
            } else {
                const errorData = await response.json();
                setError(errorData.msg || "Error en el login");
            }
        } catch (error) {
            console.error("Error al conectarse al servidor:", error);
            setError("Hubo un problema con el servidor");
        }
    };

    return (
        <div className="login-background d-flex justify-content-center align-items-center vh-100">
            <div className="login-content text-center">
                <h1>Login</h1>
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
                    <button className="btn btn-primary w-100" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};
