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
  };

  const handleCancel = () => {
    setForm(student);
    setEditing(false);
  };

  if (!form) return <p>Loading…</p>;

  return (
    <form onSubmit={handleEditSave}>
      <button type="submit">{editing ? "Save" : "Edit"}</button>
      {editing && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default SingleStudent;

