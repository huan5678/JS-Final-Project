import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";

const GateRoute = ({ children }) => {
  const { user, initializing } = useUserAuth();
  // console.log(user);

  if (initializing) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default GateRoute;