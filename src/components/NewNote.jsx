import React, { useState } from "react";
import "./Notes.css";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const changeTitleHandler = event =>{
    const value = event.target.value;
    setTitle(value)
  }

  const changeBodyeHandler = event =>{
    const value = event.target.value;
    setBody(value)
  }

  const addNote = () =>{
    let idNumber = props.newID;
    const note = {
        title: title,
        body: body,
        _id : idNumber
    };
    console.log(note.id);
    props.onAdd(note);
    
    setTitle('');
    setBody('');
}
  return (
    <div className="note newnote">
      <label className="new-title-body">Tytuł:</label>
      <input type="text" 
      className="title-body-input"
      value={title}
      onChange={changeTitleHandler}
      />
      <label className="new-title-body">Opis:</label>
      <input type="text"
      className="title-body-input"
      value={body}
      onChange={changeBodyeHandler}/>
      <button className="note-button add-button" onClick={addNote}>Dodaj</button>
    </div>
  );
};

export default NewNote;
