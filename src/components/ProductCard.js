import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AllContext } from "../contexts/AllContextProvider";

const ProductCard = ({product, refetch, setBookingProduct}) => {
  const {userFromDB} = useContext(AllContext);
  const {_id, img, name, sellingPrice, time, sellerName, location, originalPrice, months, sellerVerified} = product;
  const handleReport = (id) => {
    fetch(`https://pcbikroy-server.vercel.app/report?id=${id}`, {
        method: 'PUT',
    })
    .then( res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            toast.success('Reported to admin');
            refetch();
        }
    })
  }
  return (
    <div className="card h-full w-fit mx-auto bg-base-300 shadow-xl text-start">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <h2 className="font-bold text-end text-xl">BDT {sellingPrice}</h2>
        <small className="text-start">{time.split('(')[0]}</small>
        <h4 className="text-lg font-semibold">Seller: {sellerName} {sellerVerified && <FontAwesomeIcon title="verified" className='ml-2 text-blue-500' icon={faCheckCircle} />}</h4>
        <h4 className="text-lg font-semibold">Location: {location}</h4>
        <h4 className="text-lg font-semibold">Original Price: {originalPrice}</h4>
        <h4 className="text-lg font-semibold">used: {months/12 && `${parseInt(months/12)} year`} {months%12 === 0? <></>:`${months%12} month`}</h4>
      </div>
      <div className="text-end" title={userFromDB?.role === 'Buyer' ? "Report" : "You have to be a buyer to report items"}><button onClick={() => handleReport(_id)} className="btn btn-error btn-outline mr-4 mb-4">Report Item</button></div>
      <div className="text-end" title={userFromDB?.role === 'Buyer' ? "Booking" : "You have to be a user to book items"}><label htmlFor="booking-modal" className="btn btn-primary mr-4 mb-4" onClick={() => setBookingProduct(product)} disabled={userFromDB?.role !== 'Buyer'}>Book</label></div>
    </div>
  );
};

export default ProductCard;
