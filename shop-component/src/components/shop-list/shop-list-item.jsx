import React, {useEffect, useState} from 'react';

const ShopListItem = ({ item }) => {
  const {name, description, price, url } = item

  const useImage = (fileName) => {
    const [image, setImage] = useState()
    useEffect(() => {
        const fetchImage = async () => {
                const response = await import(`./img/${fileName}`)
                setImage(response.default)
        }
        fetchImage()
    }, [fileName])

    return {image}
  }
  const {image} = useImage(url)

  return (
    <div  className="shop-list-item">
      <div className="shop-list-item__header">
        <div className="shop-list-item__image">
          <img src={image} alt={name} className="shop-list-item__url" />
        </div>
        <h3 className="shop-list-item__name">{name}</h3>
      </div>
      <div className="shop-list-item__content">
        <p className="shop-list-item__description">{description}</p>
        <span className="shop-list-item__price">Цена: {price}</span>
      </div>
      <button className="button">Купить</button>
    </div>
  )
};

export default ShopListItem;
