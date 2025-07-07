import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router";
import "./style/StudentList.css";

const StudentsList = ({
  students = [],
  fetchAllStudents,
  isAuthenticated,
  setIsAuthenticated,
}) => {
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
