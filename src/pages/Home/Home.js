import React, { useEffect } from 'react';
import AdvertisedSection from '../../components/AdvertisedSection/AdvertisedSection';
import Slider from '../../components/Slider';

const Home = () => {
    useEffect(() => {
        document.title = "PC-Bikroy";
      }, []);
    return (
        <div>
        <Slider/>
        <AdvertisedSection/>
        </div>
    );
};

export default Home;