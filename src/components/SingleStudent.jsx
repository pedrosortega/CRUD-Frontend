import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axiosInstance";

const SingleStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/students/${id}`)
      .then(res => {
        setStudent(res.data);
        setForm(res.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  if (!student) return <p>Loading…</p>;

  return (
    <div>
      <form>
        <label>
          First Name
          <input
            name="firstName"
            value={form.firstName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            value={form.lastName || ""}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default SingleStudent;
