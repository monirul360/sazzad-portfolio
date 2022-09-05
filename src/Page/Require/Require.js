import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../firebase';
import Loader from './../Loader/Loader';
const Require = ({ children }) => {
    const [user, load] = useAuthState(auth);
    const location = useLocation();
    if (load) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate >
    }
    return children;
};

export default Require;