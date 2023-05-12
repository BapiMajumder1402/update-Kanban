import React, { useEffect, useRef, useState } from "react";
import style from "./Description.module.css";
import Icons from "../icons/Icons";
import { BsJustifyLeft } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Description() {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");
  const [savedInput, setSavedInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setEditing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleEdit() {
    setEditing(true);
    setInput(savedInput);
  }

  function handleSave() {
    setSavedInput(input);
    setEditing(false);
  }

  function handleCancel() {
    setInput(savedInput);
    setEditing(false);
  }

  return (
    <div className={style.main}>
      <span className={style.justifyIcon}>
        <Icons icon={<BsJustifyLeft />} />
      </span>
      <div className={style.disc}>
        <div className={style.descriptionHeader}>
          <p>
            Description <AiOutlineInfoCircle className={style.infoIcon} />
          </p>
        </div>
        {editing ? (
          <div className={style.inputs} ref={inputRef}>
            <ReactQuill value={input} onChange={setInput} />
            <div>
              <button onClick={handleSave} className={style.button}>
                Save
              </button>
              <button onClick={handleCancel} className={style.button}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div
              onClick={handleEdit}
              className={style.savedInput}
              dangerouslySetInnerHTML={{ __html: savedInput }}
            />
            {!savedInput && (
              <button onClick={() => setEditing(true)} className={style.button}>
                Add a more detailed description...
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
