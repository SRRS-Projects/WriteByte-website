import React from "react";
import classes from "./NoteCard.module.css";

function NoteCard({ title, content, href}, ...props) {
  return (
    <div className={classes.NoteCard} draggable>
      <a className={classes.NoteCardLink} href={href}>
        <div className="note_content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
}

export default NoteCard;
