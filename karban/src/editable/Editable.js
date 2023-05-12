import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import edit from "./editable.module.css";

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={edit.main_edit}>
      {showEdit ? (
        <form
          className={`${edit.input_edit} ${props.editClass || ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShowEdit(false);
            setInputValue("");
          }}
        >
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={props.placeholder || "Enter text"}
          />
          <div className={edit.edit_footer}>
            <button type="submit">{props.buttonText || "Add"}</button>
            <GrFormClose
              className={edit.svg}
              onClick={() => setShowEdit(false)}
            />
          </div>
        </form>
      ) : (
        <button
          className={`${edit.list}  ${props.listClass || ""}`}
          onClick={() => setShowEdit(true)}
        >
          <p className={edit.placeholder}>
            <span className={edit.addIcon}>
              <AiOutlinePlus />
            </span>
            {props.text || "Add task"}
          </p>
        </button>
        // <p onClick={()=> setShowEdit(true)}>{props.text || "Add task"}</p>
      )}
    </div>
  );
};

export default Editable;
