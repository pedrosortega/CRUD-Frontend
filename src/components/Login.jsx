import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
// import "./SignIn.css";

const loginValues = {
  username: "",
  password: "", 
};

const Login = () => {
  const navigate = useNavigate();
  const [login, setUpLogin] = useState(loginValues);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/login", login, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <main className="signIn-page-container">
      <h1> Login </h1>
      <form className="username-creation" onSubmit={handleSubmit}>
        <label htmlFor="username"> Enter your Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={login.username}
          required
          onChange={(e) =>
            setUpLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />

        <label htmlFor="password"> Enter your Password: </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={login.password}
          required
          onChange={(e) =>
            setUpLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />

        <button>Submit</button>
      </form>
    </main>
  );
};

export default Login;
