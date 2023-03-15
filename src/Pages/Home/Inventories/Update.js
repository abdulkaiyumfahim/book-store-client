import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { AuthContext } from "./../../../context/AuthProvider/AuthProvider";

const Update = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState();
  const [products, setProducts] = useProducts();
  console.log(product)
  useEffect(() => {
    fetch(`https://book-store-server-nine.vercel.app/inventories/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

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
                const remaining = products.filter((singleProduct) => singleProduct._id !== id)
                setProducts(remaining)
            }
        })
    }
  }

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const author = form.author.value;
    const price = form.price.value;
    const imageUrl = form.image.value;
    const bio = form.bio.value;

    const order = {
      inventoryId: product._id,
      name,
      email,
      phone,
      author,
      price,
      imageUrl,
      bio,
    };
    fetch(`https://book-store-server-nine.vercel.app/inventories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div>
        <h1>This is Update Pages: {id}</h1>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={product?.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="card-title">{product?.name}</h1>
              <h2 className="card-title">{product?.Author}</h2>
              <p>{product?.description}</p>
              <h2 className="card-title">{product?.supplierName}</h2>
              <p>$ {product?.price}</p>
              <p> {product?.quantity}</p>

              <div className="card-actions">
                {/* <Link to={`/inventory/${_id}`}> */}
                <button onClick={() => handleDelete(id)}  className="btn btn-primary">Delivered</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          {/* <h1>{product?._id}</h1> */}
          <input
            name="name"
            // defaultValue={product?.name}
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="email"
            defaultValue={user?.email}
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="phone"
            type="number"
            placeholder="phone"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="author"
            // defaultValue={product?.Author}
            type="text"
            placeholder="Author Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="price"
            type="text"
            // defaultValue={product?.price}
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="image"
            type="text"
            placeholder="Choose the book image"
            className="file-input w-full max-w-xs"
          />
          <textarea
            name="bio"
            placeholder="Bio"
            // defaultValue={product?.description}
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          <input
            type="submit"
            value="Place Order"
            placeholder="Place Order"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
