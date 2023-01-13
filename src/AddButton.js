import React from "react";

const AddButton = (props) => {
  return (
    <button
      className="list-item add-button"
      onClick={() => props.addItem()}
    >
      <span className="item-label button-label">
        Add Item
      </span>
      <span className="plus button-label">+</span>
    </button>
  );
};

export default AddButton;
