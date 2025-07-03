import React from "react";
import CampusCard from "./CampusCard";
import { Link } from "react-router";
import "./CampusesList.css";

const CampusesList = ({ campuses = [], fetchAllCampuses }) => {
  return (
    <div className="campus-list-container">
      <h1>Campus Listing</h1>
      <Link to="/add-campus"><button className="campus-list-button">Add Campus</button></Link>
      {campuses.map((c) => (
        <CampusCard
          key={c.imageUrl}
          campus={c}
          fetchAllCampuses={fetchAllCampuses}
        />
      ))}
    </div>
  );
};
// This goes at the bottom of the file
export default CampusesList;
