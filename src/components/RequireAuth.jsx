import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  console.log('----requireauth locaton path', location.pathname)
  const { isUserLogin } = auth
  
    if(!isUserLogin)
    return <Navigate to="/login" replace state={{ from : location }} /> 
  
  return children;
};

export default RequireAuth;
