import React from "react";
import { useUser } from "../context/userContext";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const location = useLocation();

  console.log("CURRENT PAGE", location);
  const { user } = useUser();

  return (
    <>
      {user && user?._id ? (
        children
      ) : (
        // navigate to login
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default Auth;
