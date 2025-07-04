import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router";
import "./style/StudentList.css"

const StudentsList = ({ students = [], fetchAllStudents }) => {
  return (
    <div className="student-list-div">
      <Link to="/students/new">
        <button>Add Student</button>
      </Link>
      {students.map((stu) => (
        <StudentCard
          key={stu.user_id}
          student={stu}
          fetchAllStudents={fetchAllStudents}
        />
      ))}
    </div>
  )
};

export default StudentsList;
