import React, { useState } from "react";
import style from "./Activity.module.css";
import Icons from "../icons/Icons";
import { RxActivityLog } from "react-icons/rx";

function Activity() {
  const [details, setShowDetails] = useState(false);
  function handleButton() {
    setShowDetails(!details);
  }
  return (
    <>
    <div className={style.main}>
      <span className={style.justifyIcon}>
        <Icons icon={<RxActivityLog />} />
      </span>
      <span className={style.disc}>
        <p>Activity</p>
        <button className={style.button} onClick={handleButton}>
          {details ? "Hide Details" : "Show Details"}
        </button>
        </span>
        </div>
        <div className={style.comment}>
            <span className={style.justifyImage}>
            <img className={style.userImage} src=" https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="user" width="50px" height="50px"/>
            </span>
            <span className={style.commentBtn}>
                <button>Comment</button>
            </span>
        </div>
        <div className={style.detailsDiv}>
        {details ? (
          <>
            <button className={style.hides}>HIIIIIIIIIIII</button>
          </>
        ) : (
          <></>
        )}
        </div>
        </>
  );
}

export default Activity;
