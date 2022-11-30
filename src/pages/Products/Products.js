import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ProductCategories from '../../components/ProductCategories';

const Products = () => {
    useEffect(() => {
        document.title = "Products";
      }, []);
    return (
        <div>
                <ProductCategories/>
                <Outlet/>
                
        </div>
    );
};

export default Products;