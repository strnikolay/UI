import React, {useState } from "react";
import { Context } from "../..";


const BinList = () => {
  const store = React.useContext(Context);
  const [binList, setBinList] = useState(store.binList)
  console.log(binList)

  const incrementhandle = (id) => {
    store.AddItemInBin(id)
    setBinList(store.binList)
  }

  const decrementhandle = (id) => {
    store.removeItemFromBin(id)
    setBinList(store.binList)
  }

  const deletehandle = (id) => {
    store.deleteItem(id)
    setBinList(store.binList)
  }
  
  console.log(binList)
  return (
    <ul className="cart-list">
      {store.binList.map((item) => {
        const { id } = item;

        return (
          <li key={id}>
              <div className="cart-list-item">
                <div className="cart-list-item__header">
                  <div className="cart-list-item__image">
                    <img src={item.url} alt="Телефон" />
                  </div>
                  <h4 className='cart-list-item__name'>{item.name}</h4>
                </div>
                <div>
                  <button className="button-cart" onClick={() => incrementhandle(id)}>+</button>
                  <span className="cart-list-item__count">{binList[id].count}</span>
                  <button className="button-cart" onClick={() => decrementhandle(id)}>-</button>
                </div>
                <span className="cart-list-item__total-price">{item.totalPrice}</span>
                <button className="cart-list-item__delete" onClick={() => deletehandle(id)}>Удалить</button>
              </div>
          </li>
        );
      })}
    </ul>


 
  );
};

export default BinList;
