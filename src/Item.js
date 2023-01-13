import React from "react";

const Item = (props) => {
  return (
    <div
      className={
        props.bought ? "list-item bought" : "list-item"
      }
    >
      <span className="item-label">{props.name}</span>
      <label className="container">
        <input
          type="checkbox"
          checked={props.bought}
          onChange={() => props.toggleBuy(props.index)}
        ></input>
        <span className="checkmark"></span>
      </label>

      <button
        className="item-button"
        onClick={() => props.editItem(props.index)}
      >
        ✎
      </button>
      <button
        className="item-button"
        onClick={() => props.deleteItem(props.index)}
      >
        🗑
      </button>
    </div>
  );
};

export default Item;
