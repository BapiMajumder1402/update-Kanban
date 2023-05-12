import React from "react";
import drop from "./dropdown.module.css";

const Dropdown = (props) => {
  return (
    <div
      className={drop.main}
      style={{
        position: "absolute",
        top: "100%",
        right: "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
