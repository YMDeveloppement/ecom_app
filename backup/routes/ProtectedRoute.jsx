import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
    const { user, token } = useSelector((state) => state.auth)
    console.log( 'ProtectedRoute' , user, token)
    if (!token) return <Navigate to='/auth/login' replace></Navigate>

    if (allowedRoles && !allowedRoles.includes(user?.role))
        return <Navigate to='/auth/unauthorized' replace></Navigate>
    return <Outlet />

}


export default ProtectedRoute