import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import ProductCategories from '../../components/ProductCategories';

const Products = () => {
    useEffect(() => {
        document.title = "Products";
      }, []);
    return (
        <div>
                <ProductCategories/>
                <Outlet/>
                <BookingModal/>
        </div>
    );
};

export default Products;