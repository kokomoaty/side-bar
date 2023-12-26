import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogInProvider from './contexts/LogInProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LogInProvider>
    <App/>
  </LogInProvider>
);
