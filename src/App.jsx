import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";



import Header from "./components/Header";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFind from "./pages/NotFind";
import AuthPage from "./pages/AuthPage";


const App = () => {

  const [target, setTarget] = useState(null);
  return (
    <>
      <Header
        target={target}
        setTarget={setTarget}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index setTarget={setTarget} />} exact />
          <Route
            path="/dashboard"
            element={<Dashboard setTarget={setTarget} />}
          />
          <Route path="/login" element={<AuthPage setTarget={setTarget} />} />
          <Route path="*" element={<NotFind />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;