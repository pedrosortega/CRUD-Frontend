import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import "./SignIn.css"


const  signUpValues = {
  username: "",
  passsword: "",
 };



const SignIn = () => {
    const navigate = useNavigate();

    const [signIn, setUpSignIn] = useState ([signUpValues])
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`https://localhost:3000/auth/index/signUp`, signIn);
      navigate("/app");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };


    return (
        <main className="signIn-page-container">
      <h1> Sign Up </h1>
      <form className="username-creation" onSubmit={handleSubmit}>
        <label htmlFor="login-page"> Create a Username: </label>
        <input
          type="text"
          id="username"
          name="name"
          value={signIn.username}
          required
          onChange={(e) =>
            setUpSignIn({ ...signIn, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="password-creation"> Create a Password: </label>
        <input
          type="text"
          id="signIn-password"
          name="password"
          value = {signIn.password}
          required
          onChange={(e) =>
            setUpSignIn({ ...signIn, [e.target.name]: e.target.value })
          }
        />

        <button>Submit</button>
      </form>
    </main>


    );



};

export default SignIn; 