import { useEffect, useState } from "react";
import classes from "./InputTitle.module.css";
import NoteService from "../../../API/NoteService";
import { useParams } from "react-router-dom";

function InputTitle(props) {
  return (
    <input
      {...props}
      className={classes.InputTitle}
    ></input>
  );
}

export default InputTitle;
