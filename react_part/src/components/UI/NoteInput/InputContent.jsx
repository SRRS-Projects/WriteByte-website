import TextareaAutosize from "react-textarea-autosize";
import classes from "./InputContent.module.css";
import { tabToIndentListener } from "indent-textarea";
import { useEffect, useState } from "react";
import NoteService from "../../../API/NoteService";
import { useParams } from "react-router-dom";

function InputContent(props) {

  useEffect(() => {
    document
      .querySelector("textarea")
      .addEventListener("keydown", tabToIndentListener);
  });
  return (
    <TextareaAutosize
      {...props}
      className={classes.InputContent}
    ></TextareaAutosize>
  );
}

export default InputContent;
