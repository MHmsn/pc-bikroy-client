import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductCategories from '../../components/ProductCategories';

const Products = () => {
    return (
        <div>
                <ProductCategories/>
                <Outlet/>
        </div>
    );
};

export default Products;