import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGPA] = useState("");

//   const navigate = useNavigate();

  const handleClear = () => {
    setfirstName("");
    setLastName("");
    setEmail("");
    setGPA("");
  };

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGPAChange = (e) => {
    setGPA(e.target.value);
  };

  const handeSubmit = async (e) => {
    e.preventDefault(); // Add the new student to the list of students without needing to refresh the page
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.email.value);
    console.log(e.target.gpa.value);

    const formData = new FormData(); 
    formData.append("firstName", firstName); 
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("gpa", gpa);

    try {
      const response = await axios.post("https://localhost:8080/api/students", formData);
      console.log(response.data);
    //   navigate("/students");

      handleClear();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.error(err);
      }
    }
  };
  return (
    <>
      <div>
        <h1>JOIN OUR CAMPUS</h1>
        <form onSubmit={handeSubmit}>
          <label for="firstName">FIRST NAME</label>
          <input
            required
            type="text"
            name="firstName"
            onChange={handleFirstNameChange}
            value={firstName}
          ></input>
          <label for="lastName">LAST NAME</label>
          <input
            required
            type="text"
            name="lastName"
            onChange={handleLastNameChange}
            value={lastName}
          ></input>
          <label for="email">EMAIL</label>
          <input
            required
            type="text"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
          <label for="gpa">GPA</label>
          <input
            type="number"
            name="gpa"
            onChange={handleGPAChange}
            value={gpa}
          ></input>
        </form>
        <button type="Submit">Add Student</button>
      </div>
    </>
  );
};

export default AddStudent;

// - [ ] Display this component EITHER as part of the all-students view, or as its own view
