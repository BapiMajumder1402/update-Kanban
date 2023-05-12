import React, { useEffect, useRef, useState } from 'react'
import style from "./Discription.module.css"
import Icons from '../icons/Icons';
import {BsJustifyLeft} from "react-icons/bs"
function Discription() {
    const [forms,setForm]=useState(false);
    const [input,setInputs]=useState("")
    const inputRef=useRef()
    function handleForm(){
        setForm(true);
    }
    function handleInput(e){
        setInputs(e.target.value);
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (inputRef.current && !inputRef.current.contains(event.target)) {
            setForm(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [inputRef]);
  return (
    <div className={style.main}>
      <span className={style.justifyIcon}>
        <Icons icon={<BsJustifyLeft/>}/>
      </span>
      <span className={style.disc}>
<p>Discription</p>
{/* <button onClick={handleForm} className={style.button}>Add a detailed description.....</button> */}
{forms?
          <div className={style.inputs} ref={inputRef}>
          <input type="text" onChange={handleInput}  />
        </div>

:
<button onClick={handleForm} className={style.button}>Add a detailed description.....</button>
}
      </span>
    </div>
  )
}

export default Discription
