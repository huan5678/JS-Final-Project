import { useState, useEffect, useContext, createContext } from "react";

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from '../firebase';

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [initializing, setInitializing] = useState(true);

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

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password) => {
    // console.log('Email', email);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);
  }

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (initializing) {
        setInitializing(false);
      }
    });


    return () => {
      unsubscribe();
    }
  }, [auth, initializing]);

  if (initializing) return (
    <div className="flex justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="animate-spin h-24 w-24 text-gray"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    </div>
  );

  return (
    <userAuthContext.Provider
      value={{
        user,
        initializing,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        handleToast,
      }}
    >
      {children}
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
    </userAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

