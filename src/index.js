import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './component/lang/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
);