import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ allowedRoles }) => {
    const { user, token } = useSelector((state) => state.auth)
    console.log( 'ProtectedRoute' , user, token)

    if (token) return <Navigate to='/' replace></Navigate>

    return <Outlet />

}


export default PublicRoute