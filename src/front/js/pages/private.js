import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css"; 

export const Private = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");  

    useEffect(() => {
        const validateToken = async () => {
            const isValid = await actions.private();
            if (!isValid) {
                navigate("/login");
            } else {
                
                const email = localStorage.getItem("email");
                console.log("Email desde localStorage:", email); 
                if (email) {
                    setUserEmail(email); 
                } else {
                    console.error("El correo no está disponible en localStorage");
                }
            }
        };
        validateToken();
    }, [actions, navigate]);

    
    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("email");

        
        navigate("/");
    };

    return (
        <div className="login-background d-flex justify-content-center align-items-center vh-100">
            <div className="login-content text-center">
                <h1 className="mb-4">¡Welcome developer!</h1>
                <p>{userEmail ? `Conected: ${userEmail}` : "Cargando..."}</p>

                
                <button className="btn btn-danger mt-4" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};
