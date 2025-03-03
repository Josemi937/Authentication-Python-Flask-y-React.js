import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css"; 
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  useEffect(() => {
    actions.login();
  }, []); 

  return (
    <div className="home-background d-flex justify-content-center align-items-center min-vh-100">
      <div className="home-content text-center">
        <h1>Authentication system</h1>
        <Link to="/signup" className="btn btn-primary me-2">
          Signup
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};
