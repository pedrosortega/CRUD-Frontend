import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router";
import "./style/StudentList.css"

const isAuthenticated = false; // ← set to true to test how it would look

const StudentsList = ({ students = [], fetchAllStudents }) => {
  return (
    <div className="student-list-div">
      <div className="isUser">
        {isAuthenticated ? (
          <Link to="/students/new">
            <button>Add Student</button>
          </Link>
        ) : (
          <p>Please log in to add students.</p>
        )}
      </div>
      {students.map((stu) => (
        <StudentCard
          key={stu.id}
          student={stu}
          fetchAllStudents={fetchAllStudents}
        />
      ))}
    </div>
  );
};

export default StudentsList;
