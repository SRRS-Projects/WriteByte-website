import React from "react";
import classes from "./NoteCard.module.css";

function NoteCard({title, content}, ...props) {
  return (
    <div className={classes.NoteCard} draggable>
      <div className="note_content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NoteCard;
