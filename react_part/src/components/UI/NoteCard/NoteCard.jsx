import React from "react";
import classes from "./NoteCard.module.css";

function NoteCard({ title, content, id}, ...props) {
  return (
    <div className={classes.NoteCard} draggable>
      <a className={classes.NoteCardLink} href={`/notelist/${id}`}>
        <div className="note_content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
}

export default NoteCard;
