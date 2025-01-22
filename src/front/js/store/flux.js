const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			logout: () => {
				// Eliminar el token de localStorage
				localStorage.removeItem("token");

				// Redirigir al usuario a la página de inicio (o cualquier página pública)
				window.location.href = "/";
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login: async () => {
				const email = "martola@4Geeks.com"
				const password = "654321"
				const url = "https://ideal-computing-machine-4jg6gp77gg59c77wg-3001.app.github.dev"
				const resp = await fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password })
				})
				if (!resp.ok) throw Error("There was a problem in the login request")
				const data = await resp.json()
				localStorage.setItem("token", data.token);


			},
			private: async () => {
				const token = localStorage.getItem("token")
				const resp = await fetch(process.env.BACKEND_URL + "/private", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`

					}
				})
				console.log(resp)
				const data = await resp.json()
			}
		}
	};
};

export default getState;
