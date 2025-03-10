### Authentication-Python-Flask-and-React.js:

Authentication-Python-Flask-and-React.js is a robust and flexible authentication system built with Python (Flask) for the backend and React.js for the frontend. This system provides a simple yet secure way to manage user authentication, including login, registration, and session management, for modern web applications.

Features:
- User Registration: Easily register new users with email and password.
- Login/Logout: Secure user login and logout functionality with token-based authentication (JWT).
- Session Management: Efficient management of user sessions with the use of JWT tokens, ensuring secure and persistent login states.
- Responsive UI: A user-friendly frontend built with React.js, offering a seamless experience for registration and login.
- Flask Backend: A lightweight, scalable backend built with Python Flask, ensuring security, flexibility, and ease of integration.
- JWT Authentication: Secure authentication with JSON Web Tokens (JWT) to manage user sessions and access control.

Tech Stack:
- Backend: Python, Flask
- Frontend: React.js
- Authentication: JWT (JSON Web Tokens)
- Database: Can be easily integrated with SQL or NoSQL databases based on your needs.

### 1) Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`


