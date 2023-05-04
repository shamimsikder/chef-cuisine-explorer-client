import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        
        sessionStorage.setItem('currentLocation', location.pathname);
    
    }, [location.pathname])

    if (loading) {
        return (
        <div className="flex justify-center items-center w-full h-full mt-10">
            <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-green-500 border-t-transparent"></div>
        </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: sessionStorage.getItem('currentLocation') }} replace />;

};

export default PrivateRoutes;
