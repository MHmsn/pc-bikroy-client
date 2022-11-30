import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
import { AllContext } from '../../contexts/AllContextProvider';

const MyProducts = () => {
    const { userFromDB, loading } = useContext(AllContext);
  const url = `https://pcbikroy-server.vercel.app/products?selleruid=${userFromDB.uid}`;
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertise = id => {
    fetch(`https://pcbikroy-server.vercel.app/myproducts/advertise?id=${id}`, {
        method: 'PUT',
    })
    .then( res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            toast.success('Product advertised successfully');
            refetch();
        }
    })
  }
  const handleDelete = id => {
    fetch(`https://pcbikroy-server.vercel.app/myproducts/delete?id=${id}`, {
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



  if(loading || isLoading){
    return <Loading/>
  }
    return (
        <div>
            <h2 className='text-3xl mb-5'> My products</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <td>{i+1}</td>
                <td>{product.name}</td>
                <td>{product.booked ? 'booked':'not booked'}, {product.sold ? 'sold':'not sold'}, {product.advertised ? 'advertised':'not advertised'}</td>
                <td>{product.advertised? <button onClick={() => handleAdvertise(product._id)} className='btn btn-sm btn-error btn-outline'>Remove from Advertised</button>:<button onClick={() => handleAdvertise(product._id)}  className='btn btn-sm btn-success btn-outline'>Advertise</button>}<br/>
                <button onClick={() => handleDelete(product._id)} className='btn btn-sm btn-error btn-outline mt-2'>delete product</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProducts;