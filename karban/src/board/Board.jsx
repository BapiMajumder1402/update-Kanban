import React, { useState } from "react";
import board from "./board.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import Card from "../card/Card";
import Editable from "../editable/Editable";
import Dropdown from "../dropdown/Dropdown";

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div className={board.main_board}>
      <div className={board.board_top}>
        <p className={board.board_top_tittle}>
          {props.board?.title}
          <span> &nbsp;{props.board?.cards?.length}</span>
        </p>
        <div className={board.top_more}>
          <FiMoreHorizontal onClick={handleClick} />
          {showDropdown && (
            <Dropdown>
              <div className={board.dropdown}>
                <p>Delete</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className={`${board.board_cards}  ${board.custom_scroll}`}>
        {props.board?.cards?.map((item) => (
          <Card key={item.id}  card={item}/>
        ))}
        <Editable text="Add task" placeholder="Enter Card Title" />
      </div>
    </div>
  );
};

export default Board;
