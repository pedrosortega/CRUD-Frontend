import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CampusCard from "./CampusCard";
import api from "../api/axiosInstance";

const SingleCampus = () => {
  const params = useParams();
  const id = params.id;

  //manage current states
  const [currentCampus, setCurrentCampus] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const response = await api.get(`/campuses/${id}`);
        setCurrentCampus(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching campus: ", error);
      }
    };
    fetchCampus();
  }, [id]);

  // const handleDelete = async () => {
  //   try {
  //     await api.delete(`/campuses/${id}`);
  //     fetchAllCampuses();
  //     navigate("/campuses");
  //   } catch (error) {
  //     console.error("Error deleting campus:", error);
  //   }
  // };

  return (
    <div>
      <img src={currentCampus.imageURL} alt={currentCampus.name} />
      <h3>{currentCampus.description}</h3>
      <h3>{currentCampus.address}</h3>
      <button>Delete Campus</button>
      <button>Edit Campus</button>
    </div>
  );
};

export default SingleCampus;
