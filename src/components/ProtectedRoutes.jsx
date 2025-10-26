import React from 'react'
import { useAuth } from '../hooks/context/AuthContext'
// 1. Import Outlet
import { Navigate, Outlet } from 'react-router-dom'; 

// 2. Remove { children } from props
const ProtectedRoutes = () => { 

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (!user) {
        // You might want to redirect to '/login' instead of '/'
        return (
            <>
                <Navigate to="/" replace />
            </>
        )
    }

    // 3. Render <Outlet /> instead of children
    return <Outlet />;
}

export default ProtectedRoutes