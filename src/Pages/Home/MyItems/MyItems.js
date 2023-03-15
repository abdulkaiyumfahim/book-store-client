import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MyItem from "./MyItem";

const MyItems = () => {
  const { user, loading } = useContext(AuthContext);
  const [orderPlace, setOrderPlace] = useState([]);
  //   console.log(order);

  useEffect(() => {
    fetch(`https://book-store-server-nine.vercel.app/myItems?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderPlace(data));
  }, [user?.email]);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to cancel this inventory');
    if(proceed){
        fetch(`https://book-store-server-nine.vercel.app/inventories/${id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.deletedCount > 0) {
                const remaining = orderPlace.filter((order) => order._id !== id)
                setOrderPlace(remaining)
            }
        })
    }
  }
  return (
    <div>
      <h1>You have: {orderPlace?.length} Orders </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Book Name</th>
              <th>Customer Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                orderPlace?.map((order) => <MyItem handleDelete={handleDelete} key={order._id} order={order}></MyItem>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
