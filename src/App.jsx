import { useState } from "preact/hooks";
import { AuthContextProvider, useAuthState } from "./firebase";
import { Router } from "preact-router";
import { createHashHistory } from "history";
import './style.css';

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";

const App = ()=> {
  return (
    <AuthContextProvider>
      <Header />
      <div className="bg-black h-10"></div>
      <Router history={createHashHistory()}>
        <Index title={"index"} path="/" />
        <Dashboard title={"dashboard"} path="/dashboard" />
      </Router>
    </AuthContextProvider>
  );
}

export default App;