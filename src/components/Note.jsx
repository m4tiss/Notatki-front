import React, { useState } from "react";
import "../components/Notes.css";

const Note = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div key={props.id} className="note">
      <h1 className="note-title" onClick={() => setShowDesc(!showDesc)}>
        {props.title}
      </h1>
      {showDesc && <p className="note-body">{props.body}</p>}
      <div className="buttons">
        <button className="note-button">Edytuj</button>
        <button className="note-button delete-button">Usuń</button>
      </div>
    </div>
  );
};

export default Note;
