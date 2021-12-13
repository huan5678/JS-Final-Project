import React, { useState} from 'react';

import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AuthPage = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  return (
      <div className="container">
        {loginStatus ? (
          <Login setLoginStatus={setLoginStatus} />
        ) : (
          <SignUp setLoginStatus={setLoginStatus} />
        )}
      </div>
  );
};

export default AuthPage;
