import React from 'react'
import * as ReactDOM from "react-dom";
import App from "./App";
import './style.css'


const container = document.getElementById("app");

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(<App tab="home" />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('app')
// )
