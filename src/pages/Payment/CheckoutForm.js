import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ order }) => {
  const { price, buyerName, buyerEmail, productID } = order;
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);


  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });

      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === "succeeded"){
        const payment ={
            price,
            transactionId: paymentIntent.id.at,
            buyerEmail,
            orderId: productID
        }
        setSuccess('Payment completed. Congrats!');
        setTransactionId(paymentIntent.id);
        fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                setSuccess('Congrats! your payment completed');
                setTransactionId(paymentIntent.id);
            }
        })
      }
      setProcessing(false);
    // toast.success('paid ebar bashay ja');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="my-5 border-2 p-4 border-primary rounded-xl"
          options={{
            style: {
              base: {
                fontSize: "25px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-secondary btn-outline"
          type="submit"
          disabled={!stripe || processing || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-xl text-red-500 mt-4">{cardError}</p>
      <p className="text-xl text-green-500 mt-4">{success}</p>
      <p>Your transaction ID is L <span className="font-bold"> {transactionId}</span></p>
    </div>
  );
};

export default CheckoutForm;
