import React from "react";

const Header = (props) => {
  return (
    <header id="test">
      <h1>{props.title}</h1>
      {/* <span className="stats">
         {props.bought}/{props.total} bought
      </span> */}
    </header>
  );
};

export default Header;
