import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router";
import "./Login.css";
import { useNavigate } from "react-router";


const loginValue = {
    username: "",
    password:"",
};

const LogIn = () => {
    const navigate = useNavigate();

    const [logIn, setLogIn] = useState(loginValue);

    const handleLogin =async (event) =>{
        event.preventDefault();
        try{
            await axios.post(`https://localhost:3000/auth/index/login`, logIn);
            navigate("/app");
        } catch (error){
            console.error("Error log in:", error);
        }


    }

    return (
       <main className="logIn-page-container">
       <h1>Log In</h1>
       <form className="username-login" onSubmit={handleLogin}>
        <label htmlFor="sign-up">Username:</label>
        <input
            type="text"
            id="username"
            name="name"
            value={logIn.username}
            required
            onChange={(e)=>
                setLogIn({[e.target.name]:e.target.value})
            }
        />

        <label htmlFor="password-login">Password:</label>
        <input
            type="password"
            id="logIn-password"
            name="password"
            value={logIn.password}
            required
            onChange={(e)=>
                setLogIn({[e.target.name]:e.target.value})
            }
        />

        <button>Login</button>
       </form>
       </main>
      
    );
};

export default LogIn;