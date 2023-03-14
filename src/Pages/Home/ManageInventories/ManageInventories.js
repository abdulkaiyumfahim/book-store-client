import React from "react";
import useProducts from "../../../hooks/useProducts";
import ManageInventory from "./ManageInventory";

const ManageInventories = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h1 className="grid place-content-center text-2xl mb-3 font-medium">All Inventories are there</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ManageInventory
            key={product._id}
            product={product}
          ></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
