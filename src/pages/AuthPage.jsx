import React, { useState, useEffect} from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "/src/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AuthPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAction = (id) => {
      const authentication = getAuth();
      console.log(authentication);
    };

  const handleToast = ({ message, option, status }) => {
    switch (status) {
      case "success":
        toast.success(message, option);
        break;
      case "error":
        toast.error(message, option);
        break;
      case "info":
        toast.info(message, option);
        break;
      case "warning":
        toast.warning(message, option);
        break;
      default:
        toast(message, option);
    }
  };


    useEffect(() => {
      handleAction();
      let authToken = sessionStorage.getItem("Auth Token");
      console.log(authToken);
    }, []);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <Login handleToast={handleToast} />
        <SignUp handleToast={handleToast} />
      </div>
    </div>
  );
}

export default AuthPage;
