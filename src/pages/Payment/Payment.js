import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const {id} = useParams();
    const {
        data: order = [],
        isLoading,
      } = useQuery({
        queryKey: ["order", id],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/payment/${id}`);
          const data = await res.json();
          return data;
        },
      });
      const {itemName, price} = order;
      if(isLoading){
        return <Loading/>
      }
    return (
        <div>
            <h2 className='text-2xl'>This is payment for {`${itemName}`}</h2>
            <h4> Please pay ${price} </h4>
            <div>
              <Elements stripe = {stripePromise}>
                <CheckoutForm
                  order={order}
                />
              </Elements>
            </div>
        </div>
    );
};

export default Payment;