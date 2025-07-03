import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import api from "../api/axiosInstance";

const SingleStudent = ({ fetchAllStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [form, setForm] = useState(null);
  const [editing, setEditing] = useState(false);
  const [campusList, setCampus] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [sRes, cRes] = await Promise.all([
          api.get(`/students/${id}`),
          api.get("/campuses"),
        ]);
        setStudent(sRes.data);
        setForm(sRes.data);
        setCampus(cRes.data);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    })();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    if (!editing) {
      setEditing(true);
      return;
    }
    try {
      const payload = { ...form, gpa: parseFloat(form.gpa) };
      const { data } = await api.patch(`/students/${id}`, payload);
      setStudent(data);
      setForm(data);
      setEditing(false);
      fetchAllStudents();
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  const handleCancel = () => {
    setForm(student);
    setEditing(false);
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await api.delete(`/students/${id}`);
      fetchAllStudents();
      navigate("/students");
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  if (!form) return <p>Loading…</p>;

  return (
    <div className="single-student-form-div">
      <form className="single-student-form" onSubmit={handleEditSave}>
        <img
          src={form.imageURL}
          alt={`${form.firstName} ${form.lastName}`}
          width={200}
          height={200}
        />

        <label>
          First&nbsp;Name
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        <label>
          Last&nbsp;Name
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        <label>
          Image URL
          <input
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        <label>
          GPA
          <input
            name="gpa"
            type="number"
            step="0.1"
            value={form.gpa}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        <label>
          Campus
          <select
            name="campusId"
            value={form.campusId ?? ""}
            onChange={handleChange}
            disabled={!editing}
          >
            <option value="" disabled>
              Select campus…
            </option>
            {campusList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <div style={{ marginTop: "1rem" }}>
          <button type="submit">{editing ? "Save" : "Edit"}</button>

          {editing && (
            <button
              type="button"
              onClick={handleCancel}
              style={{ marginLeft: 8 }}
            >
              Cancel
            </button>
          )}

          {editing && (
            <button
              type="button"
              onClick={handleDelete}
              style={{ marginLeft: 8, color: "red" }}
            >
              Delete Student
            </button>
          )}

          <button
            type="button"
            style={{ marginLeft: 8 }}
            onClick={() => navigate("/students")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleStudent;