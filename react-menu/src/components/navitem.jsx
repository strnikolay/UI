import React from "react";

export default function NavItem(props) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
 
        {open && props.children}
      </li>
    );
  }