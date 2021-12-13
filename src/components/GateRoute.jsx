import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";

export default function GateRoute({ children }) {
  let { user } = useUserAuth();
  console.log(user);
  if (!user) {
   return  <Navigate to="/login" />
  }
  return children
}
