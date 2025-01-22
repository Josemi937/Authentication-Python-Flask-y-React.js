import React, { useEffect, useState } from "react";

export const Private = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrivateData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("No estás autenticado");
                return;
            }

            try {
                const response = await fetch("https://ideal-computing-machine-4jg6gp77gg59c77wg-3001.app.github.dev/private", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("No autorizado");
                }

                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPrivateData();
    }, []);

    return (
        <div>
            <h1>Contenido Privado</h1>
            {error && <p className="error">{error}</p>}
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};
