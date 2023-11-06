import { Link } from 'react-router-dom';
import { listItems } from '../../listItems';
import MenuItems from './MenuItems';

const Header = () => {
  return (
    <header>
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          Лого
        </Link>
        <nav>
          <ul className="menu">
            {listItems.map((item, index) => {
              const nestingLevel = 0;
              return (
                <MenuItems
                  key={index}
                  items={item}
                  nestingLevel={nestingLevel}
                />          
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
