import React from "react";
import style from "./Layout.module.css";
import Navbar from "../navbar/Navbar";
import Board from "../../board/Board";

 
function Layout() {
  return (
    <div className={style.mainLayout}>
      <div className={style.image}>
        <Navbar />
        <div className={style.outer_board}>
          <div className={style.inner_board}>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
