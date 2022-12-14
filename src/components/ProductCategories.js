import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://pcbikroy-server.vercel.app/categories")
      .then((res) => setCategories(res.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold">Browse Products: </h2>
      <br />
      <div className="grid grid-cols-3 gap-4 md:flex md:justify-center text-center">
      {categories.map((category) => (
        <Link key={category._id} to={`/products/${category._id}`}>
          <button className="mx-2 btn btn-primary w-full">{category.name}</button>
        </Link>
      ))}
      </div>
    </div> 
  );
};

export default ProductCategories;
