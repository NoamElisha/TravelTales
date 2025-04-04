import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ ייבוא נכון ל- React 18
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ שימוש ב- createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//reportWebVitals();
