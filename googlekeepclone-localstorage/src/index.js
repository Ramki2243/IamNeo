import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/App.css";  
import App from './App';
import DataProvider from "./Context/DataProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
