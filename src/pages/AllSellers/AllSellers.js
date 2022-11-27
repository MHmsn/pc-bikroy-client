import React, { useContext } from 'react';
import { AllContext } from '../../contexts/AllContextProvider';
import { useQuery } from "@tanstack/react-query";
import Loading from '../../components/Loading';


const AllSellers = () => {
    const { loading } = useContext(AllContext);

  const url = `http://localhost:5000/users?role=Seller`;
  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ["sellers"],
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
  if(loading || isLoading)
    return<Loading/>
    return (
        <div>
            <h2 className='text-3xl mb-5'> All Sellers</h2>
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
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i+1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td><button className='btn btn-xs btn-error btn-outline mb-2'>Delete</button><br/><button className='btn btn-xs btn-success btn-outline'>Make Admin</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllSellers;