
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { AllContext } from "../../contexts/AllContextProvider";

const MyOrders = () => {
  const { loading } = useContext(AllContext);
  const url = `http://localhost:5000/orders`;
  const {
    data: orders = [],
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if(loading || isLoading){
    return <Loading/>
  }
  return (
    <div>
      <h2 className="text-3xl mb-5"> All Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <td>{i+1}</td>
                <td>{order.itemName}</td>
                <td>{order.price}</td>
                <td>{order.paid? <button className="btn btn-success btn-sm btn-outline" disabled>Paid</button>:<Link to={`/dashboard/myorders/payment/${order.productID}`}><button className="btn btn-success btn-sm btn-outline">Pay</button></Link>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
