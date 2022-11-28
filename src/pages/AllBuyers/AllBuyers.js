import React, { useContext } from 'react';
import { AllContext } from '../../contexts/AllContextProvider';
import { useQuery } from "@tanstack/react-query";
import Loading from '../../components/Loading';
import { toast } from "react-hot-toast";
const AllBuyers = () => {
    const { loading } = useContext(AllContext);

  const url = `http://localhost:5000/users?role=Buyer`;
  const { data: buyers = [], isLoading, refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = uid => {
    fetch(`http://localhost:5000/users?uid=${uid}`, {
        method: 'DELETE',
        headers: {authorization:`bearer ${localStorage.getItem('accessToken')}`}
    })
    .then( res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            toast.success('user deleted successfully');
            refetch();
        }
    })
  }
  if(loading || isLoading)
    return <Loading/>;
    return (
        <div>
            <h2 className='text-3xl mb-5'> All Buyers</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <td>{i+1}</td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button onClick={() => handleDelete(buyer.uid)} className='btn btn-xs btn-outline'>Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllBuyers;