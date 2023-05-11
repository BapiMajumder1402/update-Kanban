import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";
import card from "./card.module.css";

import Chip from "../tags/Chip";


const Card = () => {
  return (
    <div className={card.card_main}>
      <div className={card.card_top}>
        <div className={card.card_labels}>
          <Chip text="Urgent" color="red" />
          <Chip text="Frontend" color="blue" />
          <Chip text="code" color="green" />

        </div>
        <FiMoreHorizontal />
      </div>
      <div className={card.card_title}>complete kanban</div>
      <div className={card.card_footer}>
        <p>
          <AiOutlineClockCircle /> 11 May
        </p>
        <p>
          <FiCheckSquare /> 2/4
        </p>
      </div>
    </div>
  );
};

export default Card;
