import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CampusCard from "./CampusCard";
import api from "../api/axiosInstance";
import { Link } from "react-router";
const SingleCampus = () => {
  const params = useParams();
  const id = params.id;

  //manage current campus state
  const [currentCampus, setCurrentCampus] = useState({});

  //redirect after deleting campus
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCampusWithStudents = async () => {
      try {
        //manage current campus
        const response = await api.get(`/campuses/${id}`);
        setCurrentCampus(response.data);
      } catch (error) {
        console.error("Error fetching campus: ", error);
      }
    };
    fetchCampusWithStudents();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/campuses/${id}`);
      navigate("/campuses");
      fetchAllCampuses();
    } catch (error) {
      console.error("Error deleting campus:", error);
    }
  };
  if (!currentCampus.students) return <h3>No students on this campus</h3>;
  return (
    <div>
      <img src={currentCampus.imageURL} alt={currentCampus.name} />
      <h3>{currentCampus.description}</h3>
      <h3>{currentCampus.address}</h3>
      <button onClick={handleDelete}>Delete Campus</button>
      <button>Edit Campus</button>

      <div>
        {currentCampus.students &&
          currentCampus.students.map((stu) => (
            <Link to={`/students/${id}`}>
              <h3 key={stu.id}>
                {stu.firstName},{stu.lastName}
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SingleCampus;
