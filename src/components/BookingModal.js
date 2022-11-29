import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = () => {
   

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: 'date',
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          
        toast.success("Appointment added!");
        
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
          <h3 className="text-lg font-bold">name</h3>
          <form
            onSubmit={handleBooking}
            className="mt-5 grid grid-cols-1 gap-3"
          >
            
            <input
              type="text"
              name="name"
              placeholder="Full name"
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
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full input-bordered border-gray-300"
              disabled
            />
            <br />
            <input
              type="submit"
              value="submit"
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