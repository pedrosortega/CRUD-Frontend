import React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import api from "./api/axiosInstance";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CampusesList from "./components/CampusesList";
import CampusCard from "./components/CampusCard";
import CampusForm from "./components/AddCampus";
import SingleCampus from "./components/SingleCampus";
import StudentsList from "./components/StudentsList";
import AddCampus from "./components/AddCampus";
import StudentCard from "./components/StudentCard";
import SingleStudent from "./components/SingleStudent";
import NotFound from "./components/NotFound";
import AddStudent from "./components/AddStudent";
import EditCampus from "./EditCampus";
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  async function fetchAllStudents() {
    try {
      const StudentResponse = await api.get(`/students`);
      console.log("✅ API StudentResponse:", StudentResponse.data);
      setStudents(StudentResponse.data);
    } catch (error) {
      console.error("Error fetching: ", error);
    }
  }

  async function fetchAllCampuses() {
    try {
      const CampusResponse = await api.get(`/campuses`);
      console.log("✅ API CampusResponse:", CampusResponse.data);
      setCampuses(CampusResponse.data);
    } catch (error) {
      console.error("Error fetching: ", error);
    }
  }

  useEffect(() => {
    fetchAllCampuses();
    fetchAllStudents();
  }, []);

  return (
    <main>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/campuses"
            element={<CampusesList campuses={campuses} />}
          />
          <Route
            path="/add-campus"
            element={<AddCampus fetchAllCampuses={fetchAllCampuses} />}
          />

          <Route
            path="/campuses/:id"
            element={<SingleCampus fetchAllStudents={fetchAllStudents} />}
          />
          <Route
            path="/campuses/:id/edit"
            element={<EditCampus fetchAllCampuses={fetchAllCampuses} />}
          />

          <Route
            path="/students"
            element={<StudentsList students={students} />}
          />
          <Route
            path="/students/new"
            element={<AddStudent fetchAllStudents={fetchAllStudents} />}
          />

          <Route
            path="/students/:id"
            element={<SingleStudent fetchAllStudents={fetchAllStudents} />}
          />

          <Route path="/signIn" element={<SignIn />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
