import React from 'react';
import ReactDOM from 'react-dom/client';

// import bootstrap css and import before local css files
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import Card from '@mui/material/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
