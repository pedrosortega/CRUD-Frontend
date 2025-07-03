import React, { useState } from "react";
import "./AddCampus.css";

const formValues = [
  {
    name: "",
    img: "",
    description: "",
    address: "",
  },
];

const AddCampus = () => {
  const [form, setForm] = formValues;

  return (
    <main className="add-campus-container">
      <form className="add-campus-form">
        <label htmlFor="campus-name">Campus Name:</label>
        <input type="text" id="campus-name" name="name" required />

        <label htmlFor="campus-image">Image:</label>
        <input type="text" id="campus-image" name="image" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" cols={40} rows={10} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
      </form>
    </main>
  );
};

export default AddCampus;
