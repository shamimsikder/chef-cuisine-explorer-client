import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        <button type="button" class="bg-indigo-500 ...">
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                
            </svg>
            Processing...
        </button>
    }

    if(user){

        return children

    }

    return <Navigate state={{from: location.pathname}}></Navigate>
};

export default PrivateRoutes;