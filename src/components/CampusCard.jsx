import React from "react";
import api from "../api/axiosInstance";
import { Link } from "react-router";
const CampusCard = ({ campus, fetchAllCampuses }) => {
  const Delete = async () => {
    try {
      await api.delete(`/campuses/${campus.id}`);
      fetchAllCampuses();
    } catch (e) {
      console.error("Error deleting student: ", e);
    }
  };
  return (
    <div className="campus-card">
      <img
        src={campus.imageURL}
        alt={`image of ${campus.name}`}
        width={125}
        height={125}
      />
      <div className="campus-info">
        <h3>
          <Link to={`/campuses/${campus.id}`}>{campus.name} </Link>
        </h3>
      </div>
    </div>
  );
};

export default CampusCard;
