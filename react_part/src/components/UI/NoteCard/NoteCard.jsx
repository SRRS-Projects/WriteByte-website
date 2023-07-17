import React from "react";
import classes from "./NoteCard.module.css";

function NoteCard() {
  return (
    <div className={classes.NoteCard} draggable>
      <div className="note_content">
        <h3>Title</h3>
        <p>Note...</p>
      </div>
    </div>
  );
}

export default NoteCard;
