import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import StudentsList from "./StudentsList";
import "./AddStudent.css";
import api from "../api/axiosInstance";

const AddStudent = ({ fetchAllStudents }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGPA] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setGPA("");
  };

  const isUserAuthenticated = false; // Replace with actual authentication logic
  if (!isUserAuthenticated) {
    return <p>Please log in to add students.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName, lastName, email, gpa);

    const payload = {
      firstName,
      lastName,
      email,
      gpa,
    };

    try {
      const response = await api.post(
        `/students`, // fixed URL (use http not https for localhost)
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      handleClear();
      fetchAllStudents();
      navigate("/students");

      // navigate("/students");
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="add-student-container">
      <h1 className="form-title">ADD NEW STUDENT</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group"> 
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          required
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        </div>

        <div className="form-group"> 
        <label htmlFor="lastName">LAST NAME</label>
        <input
          required
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        </div> 

        <div className="form-group"> 
        <label htmlFor="email">EMAIL</label>
        <input
          required
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>

        <div className="form-group"> 
        <label htmlFor="gpa">GPA</label>
        <input
          type="number"
          name="gpa"
          onChange={(e) => setGPA(e.target.value)}
          value={gpa}
        />
        </div>

        <div className="form-buttons">
        <button type="submit">Add Student</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        </div>

      </form>
    </div>
  );
};

export default AddStudent;
