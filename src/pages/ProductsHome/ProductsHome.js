import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const ProductsHome = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {products.map(product => <div key={product._id}><ProductCard product={product}/></div>)}
        </div>
    );
};

export default ProductsHome;