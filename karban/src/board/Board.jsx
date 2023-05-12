import React, { useState } from "react";
import board from "./board.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import Card from "../card/Card";
import Editable from "../editable/Editable";
import Dropdown from "../dropdown/Dropdown";

const Board = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div className={board.main_board}>
      <div className={board.board_top}>
        <p className={board.board_top_tittle}>
          To Do <span> &nbsp; 2</span>
        </p>
        <div className={board.top_more}  >
          <FiMoreHorizontal onClick={handleClick}/>
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
        <Card />
        <Card />
        <Card />
        <Editable text="Add task" placeholder="Enter Card Title" />
        {/* hello */}
      </div>
    </div>
  );
};

export default Board;
