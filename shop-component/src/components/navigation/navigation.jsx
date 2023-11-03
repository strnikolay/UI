import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <NavLink to="/" >Главная</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink to="bin-list">Корзина</NavLink>
      </li>
    </ul>
  )
};

export default Navigation;
