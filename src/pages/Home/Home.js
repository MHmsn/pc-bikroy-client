import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AdvertisedSection from '../../components/AdvertisedSection/AdvertisedSection';
import HomeHero from '../../components/HomeHero';
import ProductCategories from '../../components/ProductCategories';
import Slider from '../../components/Slider';

const Home = () => {
    const [bookingProduct, setBookingProduct]= useState({});
    useEffect(() => {
        document.title = "PC-Bikroy";
      }, []);
    const url = 'https://pcbikroy-server.vercel.app/advertisedproducts';
      const {
        data: advertisedProducts = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["advertisedProducts"],
        queryFn: async () => {
          const res = await fetch(url, {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          const data = await res.json();
          return data;
        },
      });

    return (
        <div>
        <Slider/>
        <ProductCategories/>
        { advertisedProducts?.length > 0 && <AdvertisedSection bookingProduct={bookingProduct} setBookingProduct={setBookingProduct} advertisedProducts={advertisedProducts} refetch={refetch} isLoading={isLoading}/>}
        <HomeHero/>
        
        </div>
    );
};

export default Home;