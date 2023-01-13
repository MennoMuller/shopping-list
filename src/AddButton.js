import React from "react";

const AddButton = (props) => {
  return (
    <div className="list-item button">
      <span className="item-label button-label">
        Add Item
      </span>
      <button
        className="add-button-button"
        onClick={() => props.addItem()}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
