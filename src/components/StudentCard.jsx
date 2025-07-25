import React from "react";
import api from "../api/axiosInstance";
import { Link } from "react-router";
import "./style/StudentCard.css"

const StudentCard = ({ student, fetchAllStudents }) => {
  return (
    <div className="student-card">
      <img
        src={student.imageURL}
        alt={`image of ${student.firstName} ${student.lastName}`}
      />

      <div className="student-info">
        <h3>
          <Link to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
        </h3>

      </div>
    </div>
  );
};

export default StudentCard;
