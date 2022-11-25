import React from 'react';
import ProductCard from '../ProductCard';

const AdvertisedSection = () => {
    
    return (
        <section className='my-10'>
        <h2 className='text-3xl text-start font-bold mb-5 ml-7'> Advertised Items</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    );
};

export default AdvertisedSection;