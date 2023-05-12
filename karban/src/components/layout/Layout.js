import React from "react";
import style from "./Layout.module.css";
import Navbar from "../nabar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import Details from "../details/Details";
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
        </div>
        <Details/>
      </div>
    </div>
  );
}

export default Layout;
