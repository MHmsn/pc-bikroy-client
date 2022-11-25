import React, { useEffect } from 'react';
import AdvertisedSection from '../../components/AdvertisedSection/AdvertisedSection';
import HomeHero from '../../components/HomeHero';
import Slider from '../../components/Slider';

const Home = () => {
    useEffect(() => {
        document.title = "PC-Bikroy";
      }, []);
    return (
        <div>
        <Slider/>
        <AdvertisedSection/>
        <HomeHero/>
        </div>
    );
};

export default Home;