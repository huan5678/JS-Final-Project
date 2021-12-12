import { useState } from "react";
import { AuthContextProvider, useAuthState } from "./firebase";

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";




import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";


const App = () => {
  const [target, setTarget] = useState(null);
  return (
    <AuthContextProvider>
      <Header target={target} setTarget={setTarget} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Index setTarget={setTarget} />}
            exact
          />
          <Route
            path="/dashboard"
            element={<Dashboard setTarget={setTarget} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;