import React from 'react';
import ShopListItem from "./shop-list-item";
import { Context } from '../..';


const ShopList = () => {
  const store = React.useContext(Context)
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {store.item.map((item) => {
          const id = item.id;
          return (
            <li key={id}
              className="shop-list__item"
              onClick={() => store.AddItemInBin(id)}
            >
            <ShopListItem  item={item} />
            </li>
            )
          })
        }
      </ul>
    </section>  
  )
};

export default ShopList;
