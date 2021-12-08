import { useState } from "preact/hooks";
import { AuthContextProvider, useAuthState } from "./firebase";
import { Router } from "preact-router";
import { createHashHistory } from "history";
import './style.css';

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";


const App = () => {
  const [target, setTarget] = useState(null);

  return (
    <AuthContextProvider>
      <Header target={target} />
      <Router history={createHashHistory()}>
        <Index setTarget={setTarget} path="/" />
        <Dashboard setTarget={setTarget} path="/dashboard" />
      </Router>
    </AuthContextProvider>
  );
}

export default App;