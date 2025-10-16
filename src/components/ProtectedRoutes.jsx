import React from 'react'
import { useAuth } from '../hooks/context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (!user) {
        return (
            <>
                <Navigate to="/" replace />
            </>
        )
    }

    return children;

}

export default ProtectedRoutes
