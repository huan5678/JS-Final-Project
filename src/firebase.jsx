// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQqU4TL28ddnNqVAEsG6wIBUGnmVLu2M",
  authDomain: "fir-auth-ba08b.firebaseapp.com",
  projectId: "fir-auth-ba08b",
  storageBucket: "fir-auth-ba08b.appspot.com",
  messagingSenderId: "964180292661",
  appId: "1:964180292661:web:b1eba0b52b8db0a195ed7c",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { createContext } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, error }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
