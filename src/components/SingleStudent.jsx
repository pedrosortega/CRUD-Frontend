import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axiosInstance";

const SingleStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    api.get(`/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error("Failed to load student", err));
  }, [id]);

  if (!student) return <p>Loading…</p>;

  return (
    <div>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>{student.email}</p>
    </div>
  );
};

export default SingleStudent;
