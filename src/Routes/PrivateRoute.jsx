import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p className="text-center">Loading...</p>;
    if (!user) return <Navigate to="/login" />;

    return children;
};

export default PrivateRoute;
