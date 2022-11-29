import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';
import { AllContext } from '../../contexts/AllContextProvider';

const ProductsCategory = () => {
    const {id} = useParams();
    const {loading} = useContext(AllContext);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products/${id}`);
          const data = await res.json();
          return data;
        },
      });
    if(loading || isLoading){
        return <Loading/>
    }
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {products.length > 0 ? <></>: 'No products found'}{products.map(product => <div key={product._id}><ProductCard refetch={refetch} product={product}/></div>)}
        </div>
    );
};

export default ProductsCategory;