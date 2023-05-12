import React from "react";
import style from "./Layout.module.css";

import { AiOutlinePlus } from "react-icons/ai";
import Details from "../details/Details";

import Navbar from "../navbar/Navbar";
import Board from "../../board/Board";

 

function Layout() {
  return (
    <div className={style.mainLayout}>
      <div className={style.image}>
        <Navbar />


        <div>
          <button className={style.list}>
            <span className={style.placeholder}>
              <span className={style.addIcon}>
              <AiOutlinePlus />
              </span>
              Add a List
            </span>
           
           
          </button>

        <div className={style.outer_board}>
          <div className={style.inner_board}>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
          </div>

        </div>
        <Details/>
      </div>
    </div>
  );
}

export default Layout;
