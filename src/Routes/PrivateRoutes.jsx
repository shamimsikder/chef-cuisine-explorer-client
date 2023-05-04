import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        <div className="flex justify-center items-center w-full h-full mt-10">
                <div class="w-12 h-12 rounded-full animate-spin border-2 border-solid border-green-500 border-t-transparent"></div>
        </div>
    }

    if(user){

        return children

    }

    console.log(location)

    return <Navigate state={{from: location}} ></Navigate>;
};

export default PrivateRoutes;