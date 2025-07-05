import React, { useState, useEffect, use } from "react";
import "./EditCampus.css";
import StudentCard from "./components/StudentCard";
import { useParams } from "react-router";
import api from "./api/axiosInstance";
import { useNavigate } from "react-router";

const defaultForm = {
  name: "",
  imageURL: "",
  description: "",
  address: "",
};

const EditCampus = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [form, setForm] = useState(defaultForm);
  //   const [campus, setCampus] = useState("");
  const [students, setStudents] = useState([]);
  console.log("this is form-->", form);
  //   console.log("this is campus-->", campus);
  console.log("this is students--> ", students);

  useEffect(() => {
    const fetchCampusByID = async () => {
      try {
        const response = await api.get(`campuses/${id}`);
        setForm(response.data);
      } catch (error) {
        console.log("Failed to fetch campus by id");
      }
    };
    fetchCampusByID();
  }, [id]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const response = await api.get(`students`);
        setStudents(response.data);
      } catch (error) {
        console.log("Failed to fetch all students");
      }
    };
    fetchAllStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(`campuses/${id}`, form);
      setCampus(response.data);
      navigate(`/campuses/${id}`);
    } catch (error) {
      console.log("Error Editing Campus", error);
    }
  };

  return (
    <main className="edit-campus-container">
      <h1>Edit Campus </h1>
      <form className="edit-campus-form" onSubmit={handleSubmit}>
        <label>Campus Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          required
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label>Image:</label>
        <input
          type="text"
          name="imageURL"
          value={form.imageURL}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={form.description}
          rows={10}
          cols={50}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />

        <button>Save Changes</button>
      </form>
      <select>
        <option>Select Student...</option>
      </select>
      <button>Add To Campus</button>
      <h3>Students Enrolled</h3>
      <section className="edit-campus-student-container">
        <section className="edit-campus-student-cards">
          {students
            .filter((student) => student.campusId === Number(id))
            .map((student) => (
              <section
                className="edit-campus-student-card-content"
                key={student.id}
              >
                <StudentCard student={student} />
                <button>Remove</button>
              </section>
            ))}
        </section>
      </section>
    </main>
  );
};

export default EditCampus;
