import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import api from "../api/axiosInstance";

const SingleStudent = ({ fetchAllStudents }) => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await api.get(`/students/${id}`);
        setStudent(res.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };
    fetchStudent();
  }, [id]);

  if (!student) return <p>Loading…</p>;

  const handleDelete = async () => {
    try {
      await api.delete(`/students/${id}`);
      fetchAllStudents();
      navigate("/students");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="single-student">
      <img
        src={student.imageURL}
        alt={`${student.firstName} ${student.lastName}`}
        width={200}
        height={200}
      />
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa.toFixed(2)}</p>

      <button className="delete-button" onClick={handleDelete}>
        {" "}
        Delete Student{" "}
      </button>
      <button className="edit-button"> Edit Student</button>
    </div>
  );
};

export default SingleStudent;
