import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AllContext } from '../contexts/AllContextProvider';

const BookingModal = ({bookingProduct, setBookingProduct, refetch}) => {
   const {userFromDB} = useContext(AllContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;
    const order = {
      itemName,
      price,
      buyerName,
      buyerEmail,
      phone,
      meetingLocation,
      productID: bookingProduct._id,
      buyeruid: userFromDB.uid,
      paid: false
    };

    fetch("https://pcbikroy-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){    
        toast.success("Product Booked successfully");
        setBookingProduct(null);
        refetch();
        }
        else{
          toast.error(data.message)
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking</h3>
          <form
            onSubmit={handleBooking}
            className="mt-5 grid grid-cols-1 gap-3"
          >
            
            <input
              type="text"
              name="buyerName"
              value={userFromDB?.name || ''}
              className="input w-full input-bordered border-gray-300"
              disabled
            />
            <input
              type="text"
              name="buyerEmail"
              value={userFromDB?.email || ''}
              className="input w-full input-bordered border-gray-300"
              disabled
            />
            <input
              type="text"
              name="itemName"
              value={bookingProduct?.name || ''}
              className="input w-full input-bordered border-gray-300"
              disabled
            />
            <input
              type="text"
              name="price"
              value={bookingProduct?.sellingPrice || ''}
              className="input w-full input-bordered border-gray-300"
              disabled
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input w-full input-bordered border-gray-300"
            />
            <input
              type="text"
              name="meetingLocation"
              placeholder="Meeting Location"
              className="input w-full input-bordered border-gray-300"
            />
            <br />
            <input
              type="submit"
              value="Order"
              placeholder=" type"
              className="btn btn-primary text-center"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;