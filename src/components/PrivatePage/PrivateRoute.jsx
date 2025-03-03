import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {users,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
    }

    if(users && users?.email){
        return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;