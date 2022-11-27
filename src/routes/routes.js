import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AddAProduct from '../pages/AddAProduct/AddAProduct';
import AllBuyers from '../pages/AllBuyers/AllBuyers';
import AllSellers from '../pages/AllSellers/AllSellers';
import Blogs from '../pages/Blogs/Blogs';
import Dashboard from '../pages/Dashboard/Dashboard';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyProducts from '../pages/MyProducts/MyProducts';
import Products from '../pages/Products/Products';
import ProductsHome from '../pages/ProductsHome/ProductsHome';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products/></PrivateRoute>,
                children: [
                    {
                        path:'/products',
                        element: <ProductsHome/>
                    },
                    {
                        path:'/products/:id',
                        element: <ProductsHome/>,
                        loader: async ({params}) => {
                            return fetch(`https://localhost:5000/products/${params.id}`)
                          }
                    }
                    
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
                children:[
                    {
                        path: '/dashboard/addaproduct',
                        element: <AddAProduct/>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AllSellers/>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers/>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <MyProducts/>
                    }
                ]
            }
        ]
    }
])

export default router;