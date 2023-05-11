import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import {AiOutlineClockCircle  } from "react-icons/ai";
import card from './card.module.css'
import Chip from '../chip/Chip';

const Card = () => {
  return (
    <div className={card.card_main}>
      <div className={card.card_top}>
        <div className={card.card_labels}>
            <Chip text="Urgent" color="red"/>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className={card.card_title}>
            complete kanban
      </div>
      <div className={card.card_footer}>
        <p><AiOutlineClockCircle/></p>
      </div>
    </div>
  )
}

export default Card
