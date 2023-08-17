import React from "react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">New Arrival</h1>
      <div className="flex justify-center space-x-3 text-2xl mb-3 font-medium	">
        <Link to="/allBooks">AllBooks</Link>
        <Link to="/cooks">Cook</Link>
        <Link to="/history">History</Link>
        <Link to="/fantacy">Fantacy</Link>
      </div>
     
    </div>
  );
};

export default NewArrival;
