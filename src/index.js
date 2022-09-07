import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);


