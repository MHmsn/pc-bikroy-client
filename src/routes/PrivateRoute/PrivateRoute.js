import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AllContext } from '../../contexts/AllContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AllContext);
    const location = useLocation();
    if(loading){
        return <progress className='progress w-56'></progress>;
    }
    if(user && user){
        return children;
    }
    else{
       return <Navigate to='/login' state ={{from: location}} replace></Navigate>;
    }

    
};

export default PrivateRoute;