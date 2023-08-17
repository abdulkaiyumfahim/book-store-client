import React from "react";
import { Link } from "react-router-dom";

const Inventory = ({ product }) => {
  const { _id, name, img, Author, description, price, quantity, supplierName } =
    product;
  return (
    <div className="grid place-content-center	py-2">
      <div className="card w-96 h-50  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-50" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{name}</h1>
          <h2 className="card-title">{Author}</h2>
          <p>{description}</p>
          <h2 className="card-title">{supplierName}</h2>
          <p>$ {price}</p>
          <p> {quantity}</p>

          <div className="card-actions">
            <Link to={`/inventory/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
