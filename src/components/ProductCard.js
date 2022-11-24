import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card w-fit mx-auto bg-gray-200 shadow-xl text-start">
      <figure>
        <img src="https://www.startech.com.bd/image/cache/catalog/graphics-card/gigabyte/gtx-1050-ti-d5/gtx-1050-ti-d5-01-500x500.jpg" alt="" />
      </figure>
      <div className="card-body">
        <div className="card-title flex justify-between">
          <h2>Name</h2>
          <h2>Resale Price</h2>
        </div>
        <small className="text-end">time</small>
        <h4 className="text-lg font-semibold">Sold by</h4>
        <h4 className="text-lg font-semibold">location</h4>
        <h4 className="text-lg font-semibold">original price</h4>
        <h4 className="text-lg font-semibold">years of use</h4>
      </div>
      <div className="text-end"><Link><button className="btn btn-primary mr-4 mb-4">Book Now</button></Link></div>
    </div>
  );
};

export default ProductCard;
