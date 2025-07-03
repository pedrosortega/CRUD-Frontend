import React from "react";
import api from "../api/axiosInstance";
import { Link } from "react-router";

const StudentCard = ({ student, fetchAllStudents }) => {
  return (
    <div className="student-card">
      <img
        src={student.imageURL}
        alt={`image of ${student.firstName} ${student.lastName}`}
        width={150}
        height={150}
      />

      <div className="student-info">
        <h3>
          <Link to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
        </h3>

        <p>{student.email}</p>
        <p>GPA: {student.gpa.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StudentCard;
