import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PublicRoute = ({ children }) => {

    const { user } = useContext( AuthContext );

    return !user.logged ?
        children :
        <Navigate to="/Marvel" />
}

export default PublicRoute;