import React from "react";

const Item = (props) => {
  return (
    <div
      className={
        props.bought ? "list-item bought" : "list-item"
      }
    >
      <span className="item-label">{props.name}</span>
      <input
        type="checkbox"
        checked={props.bought}
        onChange={() => props.toggleBuy(props.index)}
      ></input>
      <button
        className="delete-item"
        onClick={() => props.deleteItem(props.index)}
      >
        -
      </button>
    </div>
  );
};

export default Item;
