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
import MyOrders from '../pages/MyOrders/MyOrders';
import MyProducts from '../pages/MyProducts/MyProducts';
import Payment from '../pages/Payment/Payment';
import Products from '../pages/Products/Products';
import ProductsCategory from '../pages/ProductsCategory/ProductsCategory';
import ProductsHome from '../pages/ProductsHome/ProductsHome';
import Register from '../pages/Register/Register';
import ReportedItems from '../pages/ReportedItems/ReportedItems';
import AdminRoute from './AdminRoute/AdminRoute';
import BuyerRoute from './BuyerRoute/BuyerRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SellerRoute from './SellerRoute/SellerRoute';

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
                        element: <ProductsCategory/>
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
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
                children:[
                    {
                        path: '/dashboard/addaproduct',
                        element: <SellerRoute><AddAProduct/></SellerRoute>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AdminRoute><AllSellers/></AdminRoute>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AdminRoute><AllBuyers/></AdminRoute>
                    },
                    {
                        path: '/dashboard/reporteditems',
                        element: <AdminRoute><ReportedItems/></AdminRoute>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <BuyerRoute><MyOrders/></BuyerRoute>
                    },
                    {
                        path: '/dashboard/myorders/payment/:id',
                        element: <BuyerRoute><Payment/></BuyerRoute>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <SellerRoute><MyProducts/></SellerRoute>
                    }
                ]
            }
        ]
    }
])

export default router;