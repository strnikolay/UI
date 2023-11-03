class Store {
  item = [
    {
      id: 0,
      name: 'Nokia 3310',
      description: 'Телефон, переживший падение в жерло вулкана',
      url: 'nokia-3310.webp',
      price: 2800,
    },
    {
      id: 1,
      name: 'Iphone 7',
      description: 'Не знаю, что про него написать. Но здесь должно быть что-то неописуемо интересное',
      url: "iphone7.jpg",
      price: 32000,
    },
    {
      id: 2,
      name: 'Iphone 7',
      description: 'Не знаю, что про него написать. Но здесь должно быть что-то неописуемо интересное',
      url: "iphone7.jpg",
      price: 32000,
    }
  ];

  binList = []

  updateItem (getItem, itemInBin, quantity){
    if (itemInBin) {
      return {
        ...itemInBin,
        totalPrice: itemInBin.totalPrice + quantity * getItem.price,
        count: itemInBin.count + quantity
      };
    }
  
    return {
      id: getItem.id,
      name: getItem.name,
      url: getItem.url,
      totalPrice: getItem.price,
      count: 1
    };
  };

  updateBinList(binList, newItem, index){
    if (newItem.count === 0) {
      return [...binList.slice(0, index), ...binList.slice(index + 1)];
    }
    if (index === -1) {
      return [...binList, newItem];
    }
    return [...binList.slice(0, index), newItem, ...binList.slice(index + 1)];
  };

  
  AddItemInBin(id){
      const binList  = this.binList;        
        const getItem = this.item.find((item) => item.id === id);
        const getItemIndex = binList.findIndex((item) => item.id === id);
        const itemInBin = binList[getItemIndex];
        const newItem = this.updateItem(getItem, itemInBin, 1);
        const newArray = this.updateBinList(this.binList, newItem, getItemIndex);
        this.binList = newArray
        return {
          binList
        };
  };

  removeItemFromBin(id) {
    const binList  = this.binList;

      const getItem = this.item.find((item) => item.id === id);
      const getItemIndex = binList.findIndex((item) => item.id === id);
      const itemInBin = binList[getItemIndex];

      const newItem = this.updateItem(getItem, itemInBin, -1);
      const newArray = this.updateBinList(binList, newItem, getItemIndex);

      this.binList = newArray
      return {
        binList
      };
  };

  deleteItem = (id) => {
    const binList  = this.binList;
  
      const getItem = this.item.find((item) => item.id === id);
      const getItemIndex = binList.findIndex((item) => item.id === id);
      const itemInBin = binList[getItemIndex];
 
      const newItem = this.updateItem(getItem, itemInBin, -itemInBin.count);
      const newArray = this.updateBinList(binList, newItem, getItemIndex);

      
      this.binList = newArray
      return {
        binList
      };
    ;
  };
 
}

export const store = new Store()