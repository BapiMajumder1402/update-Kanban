import React from 'react'
import style from "./Icons.module.css"
function Icons(props) {
  return (
    <span className={style.iconComponent}>
      {props.icon}
    </span>
  )
}

export default Icons
