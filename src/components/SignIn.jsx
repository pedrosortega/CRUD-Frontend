import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./SignIn.css";

const signUpValues = {
  username: "",
  password: "", // ✅ typo fixed
};

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn, setUpSignIn] = useState(signUpValues); // ✅ use object, not array

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/signup", signIn, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <main className="signIn-page-container">
      <h1> Sign Up </h1>
      <form className="username-creation" onSubmit={handleSubmit}>
        <label htmlFor="username"> Create a Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={signIn.username}
          required
          onChange={(e) =>
            setUpSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />

        <label htmlFor="password"> Create a Password: </label>
        <input
          type="password"
          id="signIn-password"
          name="password"
          value={signIn.password}
          required
          onChange={(e) =>
            setUpSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />

        <button>Submit</button>
      </form>
    </main>
  );
};

export default SignIn;
