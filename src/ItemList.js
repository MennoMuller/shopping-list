import React from "react";

import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="list-box">
      {props.items
        .sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
        .sort((a, b) => a.bought - b.bought)
        .map((item, index) => (
          <Item
            name={item.name}
            key={item.id.toString()}
            bought={item.bought}
            toggleBuy={props.toggleBuy}
            deleteItem={props.deleteItem}
            editItem={props.editItem}
            index={index}
          />
        ))}
    </div>
  );
};

export default ItemList;
