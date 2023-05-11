import React from "react";
import board from "./board.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import Card from "../card/Card";

const Board = () => {
  return (
    <div className={board.main_board}>
      <div className={board.board_top}>
        <p className={board.board_top_tittle}>
          To Do <span> &nbsp; 2</span>
        </p>
        <FiMoreHorizontal />
      </div>
      <div className={board.board_cards}>
        <Card/>
      </div>
    </div>
  );
};

export default Board;
