import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import Header from "./components/Header";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFind from "./pages/NotFind";
import AuthPage from "./pages/AuthPage";
import GateRoute from "./components/GateRoute.jsx";

const App = () => {

  const [target, setTarget] = useState(null);


  return (
    <>
      <UserAuthContextProvider>
        <Header
          target={target}
          setTarget={setTarget}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index setTarget={setTarget} />} exact />
            <Route
              path="/dashboard"
              element={
                <GateRoute>
                  <Dashboard setTarget={setTarget} />
                </GateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AuthPage setTarget={setTarget} />
              }
            />
            <Route path="*" element={<NotFind />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;