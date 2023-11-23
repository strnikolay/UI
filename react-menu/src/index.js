import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import NavItem from './components/navitem';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  </React.StrictMode>,
);
