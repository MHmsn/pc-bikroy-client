import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  const {img, name, sellingPrice, time, sellerName, location, originalPrice, months, sellerVerified} = product;
  return (
    <div className="card w-fit mx-auto bg-gray-200 shadow-xl text-start">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <h2 className="font-bold text-end text-xl">BDT {sellingPrice}</h2>
        <small className="text-start">{time.split('(')[0]}</small>
        <h4 className="text-lg font-semibold">Seller: {sellerName} {sellerVerified && <FontAwesomeIcon className='ml-2 text-blue-500' icon={faCheckCircle} />}</h4>
        <h4 className="text-lg font-semibold">Location: {location}</h4>
        <h4 className="text-lg font-semibold">Original Price: {originalPrice}</h4>
        <h4 className="text-lg font-semibold">used: {months/12 && `${parseInt(months/12)} year`} {months%12 && `${months%12} month`}</h4>
      </div>
      <div className="text-end"><Link><button className="btn btn-primary mr-4 mb-4">Book Now</button></Link></div>
    </div>
  );
};

export default ProductCard;
