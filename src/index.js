import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Sem1 from "./components/Sem1.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  
    <App />
    
 </React.StrictMode>
);

reportWebVitals();
