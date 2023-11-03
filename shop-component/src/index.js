import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";
import { BrowserRouter } from 'react-router-dom';
import { store } from "./db/db";

import './index.css';


export const Context = React.createContext({store})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>  
  </React.StrictMode>
);
