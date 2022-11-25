import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    axios.get('http://localhost:5000/categories')
    .then(res => setCategories(res.data))
    .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    
    return (
        <div className='my-16'>
            Browse Products: <br/> <br/>
            {categories.map(category => <Link key={category._id} to={`/products/${category.name}`}><button className='mx-2 btn btn-primary'>{category.name}</button></Link>)}
        </div>
    );
};

export default ProductCategories;