import React from "react";
import style from "./Layout.module.css";
import Details from "../details/Details";
import Navbar from "../navbar/Navbar";
import Board from "../../board/Board";

 

function Layout() {
  // const [boards,setBoard] = useState([{

  // }])
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
        <Details />
      </div>
    </div>
  );
}

export default Layout;
