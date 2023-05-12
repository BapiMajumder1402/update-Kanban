import React from 'react'
import chip from './chip.module.css'

const Chip = (props) => {
  return (
    <div className={chip.main_chip} style={{backgroundColor:props.color}}>
      {props.text}
    </div>
  )
}

export default Chip
