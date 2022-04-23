import React from "react";

const Buttons = (props) => {
  console.log("button component revaluted");
  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Buttons;
