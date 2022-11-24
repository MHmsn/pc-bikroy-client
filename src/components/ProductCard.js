import React from "react";

const ProductCard = () => {
  return (
    <div className="card w-fit mx-auto bg-gray-200 shadow-xl">
      <figure>
        <img src="https://www.startech.com.bd/image/cache/catalog/graphics-card/gigabyte/gtx-1050-ti-d5/gtx-1050-ti-d5-01-500x500.jpg" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name
        </h2>
        
      </div>
    </div>
  );
};

export default ProductCard;
