import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Inventory from "./Inventory";

const Inventories = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <Inventory key={product._id} product={product}></Inventory>
        ))}
      </div>
      <div className="my-5">
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

export default Inventories;
