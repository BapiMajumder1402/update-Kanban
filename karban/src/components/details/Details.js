import React, { useState } from 'react'
import style from "./Details.module.css";
import {FaLaptop} from "react-icons/fa";
import {RxCross2} from "react-icons/rx";
import Icons from '../icons/Icons';

import Discription from '../description/Description';

import Activity from '../activity/Activity';
function Details() {
    const [input,setInput]=useState("hii")
    function handleInput(e){
    setInput(e.target.value)
    }
  return (
    <div className={style.windows}>
      <div className={style.textAreaSection}>
        <span className={style.laptop}>
            <Icons icon={<FaLaptop/>}/>

        </span>
        <span className={style.textArea}>
<input type='text' value={input} onChange={handleInput} style={{width:"90%",border:"none",height:"30px"}}/>
<p className={style.p}>in list {input}</p>
        </span>
        <span className={style.cross}>
        <Icons icon={<RxCross2/>}/>

        </span>
      </div>
      <div>
        <Discription/>
        <Activity/>
      </div>
    </div>
  )
}

export default Details
