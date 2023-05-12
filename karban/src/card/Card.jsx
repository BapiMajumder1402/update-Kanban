import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";
import Dropdown from "../dropdown/Dropdown";
import card from "./card.module.css";

import Chip from "../tags/Chip";

const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  function handleClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div className={card.card_main}>
      <div className={card.card_top}>
        <div className={card.card_labels}>
          {props.card?.labels?.map((item, index) => {
            return <Chip key={index} text={item.text} color={item.color} />;
          })}
        </div>
        <div className={card.top_more}>
          <FiMoreHorizontal onClick={handleClick} />
          {showDropdown && (
            <Dropdown>
              <div className={card.dropdown}>
                <p>Delete card</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className={card.card_title}>{props.card?.title}</div>
      <div className={card.card_footer}>
        {props.card?.date && (
          <p>
            <AiOutlineClockCircle /> {props.card?.date}
          </p>
        )}
        <p>
          <FiCheckSquare /> 2/4
        </p>
      </div>
    </div>
  );
};

export default Card;
