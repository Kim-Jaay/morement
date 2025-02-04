import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
