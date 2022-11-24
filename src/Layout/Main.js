import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
    
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen mx-4'>    
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;