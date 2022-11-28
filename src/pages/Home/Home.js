import React, { useEffect, useState } from 'react';
import AdvertisedSection from '../../components/AdvertisedSection/AdvertisedSection';
import HomeHero from '../../components/HomeHero';
import ProductCategories from '../../components/ProductCategories';
import Slider from '../../components/Slider';

const Home = () => {
    const [advertisedProducts, setAdvertisedProducts]= useState([]);
    useEffect(() => {
        document.title = "PC-Bikroy";
      }, []);
    useEffect(() => {
        fetch('http://localhost:5000/advertisedproducts')
        .then(res => res.json())
        .then(data => setAdvertisedProducts(data))
      }, []);

    return (
        <div>
        <Slider/>
        <ProductCategories/>
        {advertisedProducts.length > 0 && <AdvertisedSection advertisedProducts={advertisedProducts}/>}
        <HomeHero/>
        
        </div>
    );
};

export default Home;