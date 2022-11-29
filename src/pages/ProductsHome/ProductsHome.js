import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';

const ProductsHome = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products`);
          const data = await res.json();
          return data;
        },
      });
      if(isLoading){
        return <Loading/>
      }
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {products.map(product => <div key={product._id}><ProductCard refetch={refetch} product={product}/></div>)}
        </div>
    );
};

export default ProductsHome;