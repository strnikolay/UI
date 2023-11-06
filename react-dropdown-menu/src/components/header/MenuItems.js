import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './Submenu';


const MenuItems = ({ items, nestingLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();
  const onMouseEnter = () => {setDropdown(true)};
  const onMouseLeave = () => {setDropdown(false)};

  return (
    <li
      ref={ref}
      className="menu-items"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? 
      (<>
          {<Link className="link" to={items.url}>{items.title}
          {nestingLevel > 0 ? 
            null : 
            nestingLevel > 0 ? 
              (<span>&raquo;</span>) : 
              (<span className="arrow" />)
          }
          </Link>}
          <SubMenu nestingLevel={nestingLevel} submenus={items.submenu} dropdown={dropdown}/>
      </>) : 
      (<Link to={items.url}>{items.title}</Link>)}
    </li>
  );
};

export default MenuItems;
