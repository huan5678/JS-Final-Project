import React, { useState} from 'react';
import loginImg from "../images/loginImg.png";
import signUpImg from "../images/signUpImg.png";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AuthPage = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  return (
    <div className="container">
      {loginStatus ? (
        <img src={loginImg} class="max-w-[224px] mx-auto" alt="login" />
      ) : (
        <img src={signUpImg} class="max-w-[224px] mx-auto" alt="signup" />
      )}
      {loginStatus ? (
        <Login setLoginStatus={setLoginStatus} />
      ) : (
        <SignUp setLoginStatus={setLoginStatus} />
      )}
    </div>
  );
};

export default AuthPage;
