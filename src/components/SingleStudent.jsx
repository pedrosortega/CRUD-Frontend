import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axiosInstance";

const SingleStudent = ({ fetchAllStudents }) => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [form, setForm] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    api.get(`/students/${id}`)
      .then(res => {
        setStudent(res.data);
        setForm(res.data);
      })
      .catch(console.error);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    if (!editing) {
      setEditing(true);
      return;
    }
    const payload = { ...form, gpa: parseFloat(form.gpa) };
    try {
      const { data } = await api.patch(`/students/${id}`, payload);
      setStudent(data);
      setForm(data);
      setEditing(false);
      fetchAllStudents();
    } catch (err) {
      console.error(err);
    }
  };

  if (!form) return <p>Loading…</p>;

  return (
    <form onSubmit={handleEditSave}>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        disabled={!editing}
      />
      <button type="submit">{editing ? "Save" : "Edit"}</button>
    </form>
  );
};

export default SingleStudent;
