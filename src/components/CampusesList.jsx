import React from "react";
import CampusCard from "./CampusCard";

const CampusesList = ({ campuses = [], fetchAllCampuses }) => {
  return (
    <div>
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
