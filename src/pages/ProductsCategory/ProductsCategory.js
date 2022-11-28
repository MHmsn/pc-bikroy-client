import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const ProductsCategory = () => {
    const products = useLoaderData();
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {products.length > 0 ? <></>: 'No products found'}{products.map(product => <div key={product._id}><ProductCard product={product}/></div>)}
        </div>
    );
};

export default ProductsCategory;