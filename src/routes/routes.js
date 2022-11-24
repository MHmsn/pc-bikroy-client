import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AddAProduct from '../pages/AddAProduct/AddAProduct';
import Blogs from '../pages/Blogs/Blogs';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyProducts from '../pages/MyProducts/MyProducts';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
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
                        path: '/dashboard/myproducts',
                        element: <MyProducts/>
                    }
                ]
            }
        ]
    }
])

export default router;