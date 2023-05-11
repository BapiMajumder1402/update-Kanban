import React,{useState} from "react";
import { GrFormClose } from "react-icons/gr";
import edit from "./editable.module.css";

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className={edit.main_edit}>
      {showEdit ? (
        <form
          className={edit.input_edit}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder={props.placeholder}
          />
          <div className={edit.edit_footer}>
            <button type="submit">{props.buttonText || "Add"}</button>
            <GrFormClose onClick={()=> setShowEdit(false)}/>
          </div>
        </form>
      ) : (
        <p onClick={()=> setShowEdit(true)}>{props.text || "Add task"}</p>
      )}
    </div>
  );
};

export default Editable;
