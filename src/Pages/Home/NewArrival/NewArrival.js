import React from "react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div>
      <div className="flex justify-center space-x-3 text-2xl mb-3 font-medium	">
        <Link to="/allBooks">AllBooks</Link>
        <Link to="/cook">Cook</Link>
        <Link to="/history">History</Link>
        <Link to="/fantacy">Fantacy</Link>
      </div>
      <div>
        <>
          <Link
            className="flex justify-center space-x-3 text-2xl mb-3 font-medium"
            to="/manageInventories"
          >
            <button className="btn btn-outline">ManageInventories</button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default NewArrival;
