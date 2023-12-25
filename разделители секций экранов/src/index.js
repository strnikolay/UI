import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';

export const Context = React.createContext({store})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{store}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);