import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyItem = ({ order, handleDelete }) => {
  const {_id, inventoryId, name, author, email, phone, price } = order;
  const { user, loading } = useContext(AuthContext);

  const [orderPlace, setOrderPlace] = useState();
  useEffect(() => {
    fetch(`https://book-store-server-nine.vercel.app/inventories/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setOrderPlace(data));
  }, [inventoryId]);


  return (
    <div>
      <tr>
        <th>
          <label>
            <button onClick={() =>handleDelete(_id)} className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {orderPlace?.img && (
                  <img
                    src={orderPlace?.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{author}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">{phone}</span>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
      </tr>
    </div>
  );
};

export default MyItem;
