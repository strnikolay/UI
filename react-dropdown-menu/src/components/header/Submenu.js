import MenuItems from './MenuItems';

const SubMenu = ({ submenus, dropdown, nestingLevel }) => {
  nestingLevel = nestingLevel + 1;
  const dropdownClass = nestingLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : '' 
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          key={index}
          items={submenu}
          nestingLevel={nestingLevel}
        />
      ))}
    </ul>
  );
};

export default SubMenu;
