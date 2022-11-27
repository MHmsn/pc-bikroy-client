import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { AllContext } from '../../contexts/AllContextProvider';
import Error403 from '../../pages/ErrorPage/Error403';

const AdminRoute = ({children}) => {
    const { userFromDB, loading} = useContext(AllContext);
    if(loading){
        return <Loading/>
    }
    else if(userFromDB?.role !== 'Admin'){
        return <Error403/>;
    }
    else{
        return children;
    }
};

export default AdminRoute;