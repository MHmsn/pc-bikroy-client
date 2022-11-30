import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import { AllContext } from "../../contexts/AllContextProvider";

const ReportedItems = () => {
  const { loading } = useContext(AllContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reporteditems`);
      const data = await res.json();
      return data;
    },
  });
  if (loading || isLoading) {
    return <Loading />;
  }
  const handleDelete = id => {
    fetch(`http://localhost:5000/myproducts/delete?id=${id}`, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            toast.success('Product deleted successfully');
            refetch();
        }
    })
  }
  const handleRemoveReport = id => {
    fetch(`http://localhost:5000/report?id=${id}`, {
        method: 'PUT',
    })
    .then( res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            toast.success('report removed');
            refetch();
        }
    })
  }
  return (
    <div>
      <h2 className="text-3xl mb-5"> All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>{product.sellerName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs btn-error btn-outline mb-2"
                  >
                    Delete
                  </button>
                  <br />
                    <button
                      onClick={() => handleRemoveReport(product._id)}
                      className="btn btn-xs btn-error btn-outline"
                    >
                      remove from Reported
                    </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
