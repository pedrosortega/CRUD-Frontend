import React from "react";
import CampusCard from "./CampusCard";
import { Link } from "react-router";
import "./CampusesList.css";

const isAuthenticated = false; // ← set to true to test how it would look

const CampusesList = ({ campuses = [], fetchAllCampuses }) => {
  return (
    <main className="campus-list">
      <h1 className="campus-list-title">Campus Listing</h1>
      <div className="campus-list-container">
        {isAuthenticated ? (
          <Link to="/add-campus">
            <button className="campus-list-button">Add Campus</button>
          </Link>
        ) : (
          <p>Please log in to add campuses.</p>
        )}
        {campuses.map((c) => (
          <div className="campus-list-cards">
            <CampusCard
              key={c.id}
              campus={c}
              fetchAllCampuses={fetchAllCampuses}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
// This goes at the bottom of the file
export default CampusesList;
