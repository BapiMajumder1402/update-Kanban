import React from "react";
import style from "./Layout.module.css";
import Navbar from "../nabar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
function Layout() {
  return (
    <div className={style.mainLayout}>
      <div className={style.image}>
        <Navbar />

        <div>
          <button className={style.list}>
            <AiOutlinePlus />
            Add a List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
