import React, { useState } from "react";
import "../components/Notes.css";

const Note = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  const editHandler=()=>{
    props.onEdit({
      title:props.title,
      body:props.body,
      _id:props._id
    });
  }

  return (
    <div key={props._id} className="note">
      <h1 className="note-title" onClick={() => setShowDesc(!showDesc)}>
        {props.title}
      </h1>
      {showDesc && <p className="note-body"  >{props.body}</p>}
      <div className="buttons">
        <button className="note-button" onClick={editHandler}>Edytuj</button>
        <button className="note-button delete-button" onClick={() => props.onDelete(props._id)}>Usuń</button>
      </div>
    </div>
  );
};

export default Note;
