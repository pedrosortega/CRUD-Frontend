import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import "./AddCampus.css";

const formValues = {
  name: "",
  img: "",
  description: "",
  address: "",
};

const AddCampus = ({}) => {
  const navigate = useNavigate();

  const [form, setForm] = useState(formValues);
  // console.log("form state-->", form);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/campuses", form);
      navigate("/campuses");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <main className="add-campus-container">
      <h1>Add New Campus Form</h1>
      <form className="add-campus-form" onSubmit={handleSubmit}>
        <label htmlFor="campus-name">Campus Name:</label>
        <input
          type="text"
          id="campus-name"
          name="name"
          value={form.name}
          required
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="campus-image">Image:</label>
        <input
          type="text"
          id="campus-image"
          name="img"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          cols={40}
          rows={10}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <button>Submit</button>
      </form>
    </main>
  );
};

export default AddCampus;
